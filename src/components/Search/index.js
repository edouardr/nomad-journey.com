import React, { useState, createRef } from 'react';
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import PoweredBy from './poweredBy';
import Input from './input';
import * as hitComps from './hitComps';
import useClickOutside from '../../hooks/useClickOutside';
import styles from './index.module.scss';
import useLang from '../../hooks/useLang';
import useDictionaryQuery from '../../hooks/useDictionaryQuery';
import { getDictionaryValue } from '../../utils/dictionary';

const DICT_SEARCH_NO_RESULTS = `search-no-results`;
const DICT_SEARCH_RESULT = `search-result`;

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) => {
    const { language } = useLang();
    const data = useDictionaryQuery();
    const dic_search_no_results = getDictionaryValue({
      key: DICT_SEARCH_NO_RESULTS,
      lang: language,
      data: data,
    });

    return res && res.nbHits > 0
      ? children
      : `${dic_search_no_results}'${state.query}'`;
  },
);

const Stats = connectStateResults(({ searchResults: res }) => {
  const { language } = useLang();
  const data = useDictionaryQuery();
  const dic_search_result = getDictionaryValue({
    key: DICT_SEARCH_RESULT,
    lang: language,
    data: data,
  });

  return (
    res &&
    res.nbHits > 0 &&
    `${res.nbHits} ${dic_search_result}${res.nbHits > 1 ? `s` : ``}`
  );
});

const Search = ({ indices }) => {
  const ref = createRef();
  const [query, setQuery] = useState(``);
  const [focus, setFocus] = useState(false);
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  );

  const onSearchStateChange = ({ query }) => {
    setQuery(query);
  };

  const onFocus = () => {
    setFocus(true);
  };

  const removeFocus = () => {
    setFocus(false);
  };

  useClickOutside(ref, removeFocus);

  const Root = {
    Root: 'div',
    props: {
      ref: ref,
      className: styles.root,
    },
  };

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={onSearchStateChange}
      root={Root}
    >
      <Input onFocus={onFocus} />
      <div
        className={`${styles.hitsWrapper} ${
          query.length > 0 && focus ? styles.focused : ''
        }`}
      >
        {indices.map(({ name, hitComp }) => (
          <Index key={name} indexName={name}>
            <header>
              <Stats />
            </header>
            <Results>
              <Hits hitComponent={hitComps[hitComp](removeFocus)} />
            </Results>
          </Index>
        ))}
        <PoweredBy />
      </div>
    </InstantSearch>
  );
};

export default Search;
