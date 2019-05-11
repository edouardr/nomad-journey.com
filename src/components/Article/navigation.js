import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useLang from '../../hooks/useLang';
import styles from './navigation.module.scss';

const ArticleNavigation = ({ previous, next }) => {

  const { language } = useLang();

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
                  <span className="is-block">Article précédent</span>
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
                  <span className="is-block">Article suivant</span>
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
