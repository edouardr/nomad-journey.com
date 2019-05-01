import React, { useState } from "react";
import LazyLoad from "react-lazy-load";
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import ImageLoader from "../ImageLoader/imageLoader";
import { formatDate } from '../../utils/date-time';
import styles from './listingItem.module.scss';

const ListingItem = ({ article }) => {
  const [visible, setVisible] = useState(false);

  return (
    <LazyLoad className={`${styles.articleTile} ${visible ? styles.visible : ''}`} onContentVisible={() => setVisible(true)}>
      <Link to={`${article.node.system.language}/${article.node.elements.slug.value}`}>
        <div className={styles.imgCol}>
          <div className={styles.imgWrap}>
            <div className={styles.innerWrap}>
              <ImageLoader src={article.node.elements.list_item__thumbnail.value[0].url} />
            </div>
          </div>
        </div>
        <div className={styles.txtCol}>
          <div className={styles.txtWrap}>
            <p className={styles.tag}>{formatDate(article.node.elements.posted.value, article.node.system.language)} - {article.node.elements.location.value}</p>
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
