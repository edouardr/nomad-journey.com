import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import useLang from '../../hooks/useLang';
import styles from './navigation.module.scss';
import useDictionaryQuery from '../../hooks/useDictionaryQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DICT_NEXT_KEY = 'next-article';
const DICT_PREVIOUS_KEY = 'previous-article';

const ArticleNavigation = React.memo(function ArticleNavigation({
  previous,
  next,
}) {
  const { language } = useLang();
  const data = useDictionaryQuery();
  const dict_previous_article = data.edges
    .filter(
      edge =>
        edge.node.elements.key.value === DICT_PREVIOUS_KEY &&
        edge.node.system.language === language
    )
    .map(edge => edge.node)[0];
  const dict_next_article = data.edges
    .filter(
      edge =>
        edge.node.elements.key.value === DICT_NEXT_KEY &&
        edge.node.system.language === language
    )
    .map(edge => edge.node)[0];

  return (
    <nav className={styles.articleNav}>
      <div>
        {previous && (
          <AniLink
            cover
            direction="right"
            duration={1}
            bg="#1ad2eb"
            className={styles.link}
            to={`/${language}/${previous.node.elements.slug.value}`}
          >
            <div className="columns is-mobile is-gapless is-vcentered">
              <div className="column">
                <FontAwesomeIcon
                  className={`${styles.arrow} ${styles.right}`}
                  icon="arrow-left"
                />
              </div>
              <div className="column is-narrow">
                <div className={styles.txt}>
                  <div className="columns is-narrow is-multiline is-gapless">
                    <div className="column is-12">
                      <span className="is-size-7">
                        {dict_previous_article.elements.value.value}
                      </span>
                    </div>
                    <div className="column is-12">
                      <span className="is-size-6">
                        {previous.node.elements.list_item__title.value}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AniLink>
        )}
      </div>
      <div>
        {next && (
          <AniLink
            cover
            direction="left"
            duration={1}
            bg="#1ad2eb"
            className={styles.link}
            to={`/${language}/${next.node.elements.slug.value}`}
          >
            <div className="columns is-vcentered is-mobile is-gapless">
              <div className="column is-narrow">
                <div className={styles.txt}>
                  <div className="columns is-multiline is-gapless">
                    <div className="column is-12 is-narrow has-text-right">
                      <span className="is-size-7">
                        {dict_next_article.elements.value.value}
                      </span>
                    </div>
                    <div className="column is-12 is-narrow has-text-right">
                      <span className="is-size-6">
                        {next.node.elements.list_item__title.value}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-narrow is-2">
                <FontAwesomeIcon
                  className={`${styles.arrow} ${styles.left}`}
                  icon="arrow-right"
                />
              </div>
            </div>
          </AniLink>
        )}
      </div>
    </nav>
  );
});

ArticleNavigation.propTypes = {
  previous: PropTypes.object,
  next: PropTypes.object,
};

export default ArticleNavigation;
