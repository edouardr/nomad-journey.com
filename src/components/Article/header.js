import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import CommentCount from '../Disqus/commentCount';
import { formatDate } from '../../utils/date-time';
import styles from './header.module.scss';

const ArticleHeader = ({ article }) => {
  const countConfig = {
    url: `${article.site.siteMetadata.siteUrl}${article.fields.language}/${article.fields.slug}`,
    identifier: article.fields.codename,
  };

  return (
    <>
      <div className="columns">
        <div className="column is-offset-2 is-8">
          <div className={styles.articleHeader}>
            <div className="content">
              <p className="subtitle location">{article.elements.location.value}</p>
              <h1 className="title is-spaced">{article.elements.jumbotron__title.value}</h1>
            </div>
            <div className={styles.articleDetails}>
              <p>
                <span>{formatDate(article.elements.posted.value, article.system.language)}</span>
                <span className={styles.divider}></span>
                <a href="#disqus_thread">
                  <CommentCount
                    shortname={process.env.DISQUS_SHORTNAME}
                    config={countConfig}>
                      &nbsp;comments
                  </CommentCount>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-offset-2 is-8">
          <Img fluid={article.fields.jumbotronImage.childImageSharp.fluid} alt={article.elements.jumbotron__image.value[0].description} />
        </div>
      </div>
    </>
  );
};

ArticleHeader.propTypes = {
  article: PropTypes.object
};

export default ArticleHeader;
