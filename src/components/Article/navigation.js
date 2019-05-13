import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useLang from '../../hooks/useLang';
import styles from './navigation.module.scss';
import useDictionaryQuery from '../../hooks/useDictionaryQuery';

const DICT_NEXT_KEY = 'next-article';
const DICT_PREVIOUS_KEY = 'previous-article';

const ArticleNavigation = ({ previous, next }) => {
  const { language } = useLang();
  const data = useDictionaryQuery();
  const dict_previous_article = data.edges
    .filter(edge => edge.node.elements.key.value === DICT_PREVIOUS_KEY && edge.node.system.language === language)
    .map(edge => edge.node)[0];
  const dict_next_article = data.edges
    .filter(edge => edge.node.elements.key.value === DICT_NEXT_KEY && edge.node.system.language === language)
    .map(edge => edge.node)[0];

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered is-mobile">
          <div className="column">
            {
              previous &&
              <AniLink
                to={`/${language}/${previous.node.elements.slug.value}`}
                cover
                direction="right"
                duration={1}
                bg="#1ad2eb"
                className={styles.link}
              >
                <span className={`${styles.icon} ${styles.left}`}>
                  <FontAwesomeIcon icon="arrow-left" />&nbsp;
                </span>
                <span className={styles.txt}>
                  <span className="is-block">{dict_previous_article.elements.value.value}</span>
                  <span className="is-block">{previous.node.elements.jumbotron__title.value}</span>
                </span>
              </AniLink>
            }
          </div>
          <div className="column has-text-right">
            {
              next &&
              <AniLink
                to={`/${language}/${next.node.elements.slug.value}`}
                cover
                direction="left"
                duration={1}
                bg="#1ad2eb"
                className={styles.link}
              >
                <span className={`${styles.icon} ${styles.right}`}>
                  <FontAwesomeIcon icon="arrow-right" />
                </span>
                <span className={styles.txt}>
                  <span className="is-block">{dict_next_article.elements.value.value}</span>
                  <span className="is-block">{next.node.elements.jumbotron__title.value}</span>
                </span>
              </AniLink>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

ArticleNavigation.propTypes = {
  previous: PropTypes.object,
  next: PropTypes.object,
};

export default ArticleNavigation;
