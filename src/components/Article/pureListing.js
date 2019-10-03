import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListingItem from './listingItem';
import useLang from '../../hooks/useLang';
import useDictionaryQuery from '../../hooks/useDictionaryQuery';
import { getDictionaryValue } from '../../utils/dictionary';
import styles from './pureListing.module.scss';

const startPosition = 0;
const DEFAULT_LOAD_COUNT = 5;
const DICT_VIEW_MORE = 'view-more';

const PureListing = ({ articles, loadCount = DEFAULT_LOAD_COUNT }) => {
  const initialState = {
    list: [],
    position: 0,
  };

  const { language } = useLang();
  const [state, setState] = useState(initialState);
  const data = useDictionaryQuery();
  const dict_view_more = getDictionaryValue({
    key: DICT_VIEW_MORE,
    lang: language,
    data: data,
  });

  const loadMore = () => {
    const end =
      state.position + loadCount > articles.length
        ? articles.length
        : state.position + loadCount;
    const fullArray = state.list.concat(articles.slice(state.position, end));
    setState({ list: fullArray, position: end });
  };

  const handleClick = () => {
    loadMore();
  };

  useEffect(() => {
    setState({
      list: articles.slice(startPosition, loadCount),
      position: loadCount,
    });
  }, []);

  return (
    <>
      {state.list &&
        state.list.map(article => (
          <ListingItem key={article.node.id} article={article} />
        ))}
      {state.position < articles.length && (
        <div className={styles.readMore}>
          <button
            onClick={handleClick}
            className={`${styles.readMoreBtn} button is-light is-medium has-text-white`}
          >
            <span>{dict_view_more}</span>
          </button>
        </div>
      )}
    </>
  );
};

PureListing.propTypes = {
  articles: PropTypes.array,
  loadCount: PropTypes.number,
};

export default React.memo(PureListing);
