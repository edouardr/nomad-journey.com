import React, { useState, createRef } from 'react';
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import { Root, HitsWrapper, PoweredBy } from './styles';
import Input from './input';
import * as hitComps from './hitComps';
import useClickOutside from '../../hooks/useClickOutside';

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children : `No results for '${state.query}'`
);

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
);

const Search = React.useMemo(function ({ indices, collapse, hitsAsGrid }) {
  const ref = createRef();
  const [query, setQuery] = useState(``);
  const [focus, setFocus] = useState(false);
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  );

  const onSearchStateChange = ({ query }) => {
    setQuery(query);
  };

  useClickOutside(ref, () => setFocus(false));

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={onSearchStateChange}
      root={{ Root, props: { ref } }}
    >
      <Input onFocus={() => setFocus(true)} {...{ collapse, focus }} />
      <HitsWrapper show={query.length > 0 && focus} asGrid={hitsAsGrid}>
        {indices.map(({ name, title, hitComp }) => (
          <Index key={name} indexName={name}>
            <header>
              <h3>{title}</h3>
              <Stats />
            </header>
            <Results>
              <Hits hitComponent={hitComps[hitComp](() => setFocus(false))} />
            </Results>
          </Index>
        ))}
        <PoweredBy />
      </HitsWrapper>
    </InstantSearch>
  );
});

export default Search;
