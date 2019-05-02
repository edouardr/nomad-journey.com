import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import ListingItem from "./listingItem";
import styles from './pureListing.module.scss';

const startPosition = 0;

const PureListing = ({ articles, loadCount = 5 }) => {
  const initialState = {
    list: [],
    position: 0
  };

  const [state, setState] = useState(initialState);

  const loadMore = () => {
    const end = state.position + loadCount > articles.length ? articles.length : state.position + loadCount;
    const fullArray = state.list.concat(articles.slice(state.position, end));
    setState({ list: fullArray, position: end });
  };

  const handleClick = () => {
    loadMore();
  };

  useEffect(() => {
    setState({ list: articles.slice(startPosition, loadCount), position: loadCount });
  }, []);

  return (
    <>
      {
        state.list && state.list.map(article => (
          <ListingItem key={article.node.id} article={article} />
        ))
      }
      {
        state.position < articles.length && (
          <div className={styles.readMore}>
            <button onClick={() => handleClick()} className="button is-primary is-medium is-outlined">
              <span className={styles.txt}>View more</span>
            </button>
          </div>
        )
      }
    </>
  );
};

PureListing.propTypes = {
  articles: PropTypes.array,
  loadCount: PropTypes.number
};

export default PureListing;
