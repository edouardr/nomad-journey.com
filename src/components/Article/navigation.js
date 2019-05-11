import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useLang from '../../hooks/useLang';

const ArticleNavigation = ({ previous, next }) => {

  const { language } = useLang();

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            {
              previous &&
              <AniLink
                to={`/${language}/${previous.node.elements.slug.value}`}
                cover
                direction="right"
                duration={1}
                bg="#1ad2eb"
              >
                <FontAwesomeIcon icon="arrow-left" className="is-inline-block"/>&nbsp;
                <span className="is-block">Article précédent</span>
                <span className="is-block">{previous.node.elements.jumbotron__title.value}</span>
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
              >
                <FontAwesomeIcon icon="arrow-right" className="is-inline-block"/>&nbsp;
                <span className="is-block">Article suivant</span>
                <span className="is-block">{next.node.elements.jumbotron__title.value}</span>
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
