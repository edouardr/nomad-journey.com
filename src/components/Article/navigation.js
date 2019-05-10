import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useLang from '../../hooks/useLang';

const ArticleNavigation = ({previous, next}) => {
  const {language} = useLang();
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column has-text-left">
          {
            previous && 
            <Link to={`/${language}/${previous.node.elements.slug.value}`}>
              <FontAwesomeIcon icon="arrow-left" />
              {previous.node.elements.jumbotron__title.value}
            </Link>
          }
          </div>
          <div className="column has-text-right">
          {
            next &&
            <Link to={`/${language}/${next.node.elements.slug.value}`}>
              {next.node.elements.jumbotron__title.value}
              <FontAwesomeIcon icon="arrow-right" />
            </Link>
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
