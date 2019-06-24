import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { CommentCount } from 'disqus-react';
import ImageLoader from '../ImageLoader/imageLoader';
import { formatDate } from '../../utils/date-time';
import { getDictionaryValue } from '../../utils/dictionary';
import useDictionaryQuery from '../../hooks/useDictionaryQuery';
import useLang from '../../hooks/useLang';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import styles from './listingItem.module.scss';

const DICT_COMMENTS = 'comments';

const ListingItem = ({ article }) => {
  const { siteMetadata } = useSiteMetadata();
  const { language } = useLang();
  const data = useDictionaryQuery();
  const dict_comments = getDictionaryValue({
    key: DICT_COMMENTS,
    lang: language,
    data: data,
  });
  const [visible, setVisible] = useState(false);
  const countConfig = {
    url: `${siteMetadata.siteUrl}${article.node.system.language}/${article.node.elements.slug.value}`,
    identifier: article.node.system.codename,
  };

  const onContentVisible = () => {
    setVisible(true);
  };

  return (
    <LazyLoad
      className={`${styles.articleTile} ${visible ? styles.visible : ''}`}
      onContentVisible={onContentVisible}
    >
      <Link
        to={`/${article.node.system.language}/${article.node.elements.slug.value}`}
      >
        <div className={styles.imgCol}>
          <div className={styles.imgWrap}>
            <div className={styles.innerWrap}>
              <ImageLoader
                src={article.node.elements.list_item__thumbnail.value[0].url}
                alt={article.node.elements.list_item__thumbnail.value[0].name}
              />
            </div>
          </div>
        </div>
        <div className={styles.txtCol}>
          <div className={styles.txtWrap}>
            <p className={styles.tag}>
              {formatDate(
                article.node.elements.posted.value,
                article.node.system.language
              )}
              - {article.node.elements.location.value} -&nbsp;
              <span>
                <CommentCount
                  shortname={process.env.GATSBY_DISQUS_SHORTNAME}
                  config={countConfig}
                />
                &nbsp;{dict_comments}
              </span>
            </p>
            <p className="title">
              <span className="txt">
                {article.node.elements.list_item__title.value}
              </span>
            </p>
            <p className={styles.publishDetails}>
              {article.node.elements.list_item__description.value}
            </p>
          </div>
        </div>
      </Link>
    </LazyLoad>
  );
};

ListingItem.propTypes = {
  article: PropTypes.object,
};

export default React.memo(ListingItem);
