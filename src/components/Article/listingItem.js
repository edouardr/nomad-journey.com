import React, { useState } from "react";
import LazyLoad from "react-lazy-load";
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import CommentCount from '../Disqus/commentCount';
import ImageLoader from "../ImageLoader/imageLoader";
import { formatDate } from '../../utils/date-time';
import useDictionaryQuery from "../../hooks/useDictionaryQuery";
import useLang from "../../hooks/useLang";
import useSiteMetadata from "../../hooks/useSiteMetadata";
import styles from './listingItem.module.scss';

const DICT_COMMENTS = 'comments';

const ListingItem = ({ article }) => {
  const { siteMetadata } = useSiteMetadata();
  const { language } = useLang();
  const data = useDictionaryQuery();
  const dict_comments = data.edges
    .filter(edge => edge.node.elements.key.value === DICT_COMMENTS && edge.node.system.language === language)
    .map(edge => edge.node)[0];
  const [visible, setVisible] = useState(false);
  const countConfig = {
    url: `${siteMetadata.siteUrl}${article.node.system.language}/${article.node.elements.slug.value}`,
    identifier: article.node.system.codename,
  };

  return (
    <LazyLoad className={`${styles.articleTile} ${visible ? styles.visible : ''}`} onContentVisible={() => setVisible(true)}>
      <Link to={`/${article.node.system.language}/${article.node.elements.slug.value}`}>
        <div className={styles.imgCol}>
          <div className={styles.imgWrap}>
            <div className={styles.innerWrap}>
              <ImageLoader src={article.node.elements.list_item__thumbnail.value[0].url} />
            </div>
          </div>
        </div>
        <div className={styles.txtCol}>
          <div className={styles.txtWrap}>
            <p className={styles.tag}>{formatDate(article.node.elements.posted.value, article.node.system.language)} - {article.node.elements.location.value} -&nbsp;
                  <CommentCount
                    shortname={process.env.DISQUS_SHORTNAME}
                    config={countConfig}>
                      &nbsp;{dict_comments.elements.value.value}
                  </CommentCount></p>
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
  article: PropTypes.object
};

export default ListingItem;
