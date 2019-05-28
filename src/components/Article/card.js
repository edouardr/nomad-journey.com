import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./card.module.scss";

const ArticleCard = ({ article, shortTitle, isNext }) => {
  return (
    <>
      <div className={`${styles.card} is-flex`}>
        <div className={styles.cardContent}>
          <div className="columns">
            {
              !isNext && <div className="column"><FontAwesomeIcon icon="arrow-left" /></div>
            }
            <div className="column">
              <p className="subtitle is-7">
                {shortTitle}
              </p>
              <p className="title is-5 is-spaced">
                {article.elements.list_item__title.value}
              </p>
            </div>
            {
              isNext && <div className="column"><FontAwesomeIcon icon="arrow-right" /></div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object,
  shortTitle: PropTypes.string,
  isNext: PropTypes.bool
};

export default ArticleCard;
