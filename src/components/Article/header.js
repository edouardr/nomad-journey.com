import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { CommentCount } from 'disqus-react';
import useDictionaryQuery from '../../hooks/useDictionaryQuery';
import useLang from '../../hooks/useLang';
import { formatDate } from '../../utils/date-time';
import { getDictionaryValue } from '../../utils/dictionary';
import styles from './header.module.scss';

const DICT_COMMENTS = 'comments';

const ArticleHeader = ({ article }) => {
  const { language } = useLang();
  const data = useDictionaryQuery();
  const dict_comments = getDictionaryValue({
    key: DICT_COMMENTS,
    lang: language,
    data: data,
  });
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
              <p className="subtitle location">
                {article.elements.location.value}
              </p>
              <h1 className="title is-spaced">
                {article.elements.jumbotron__title.value}
              </h1>
            </div>
            <div className={styles.articleDetails}>
              <p>
                <span>
                  {formatDate(
                    article.elements.posted.value,
                    article.system.language,
                  )}
                </span>
                <span className={styles.divider} />
                <a href="#disqus_thread">
                  <CommentCount
                    shortname={process.env.GATSBY_DISQUS_SHORTNAME}
                    config={countConfig}
                  />
                  &nbsp;{dict_comments}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-offset-2 is-8">
          <Img
            fluid={article.fields.jumbotronImage.childImageSharp.fluid}
            alt={
              article.elements.jumbotron__image.value[0].description ||
              article.elements.jumbotron__image.value[0].name
            }
          />
        </div>
      </div>
    </>
  );
};

ArticleHeader.propTypes = {
  article: PropTypes.object,
};

export default ArticleHeader;
