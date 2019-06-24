import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useWindowEvent from '../../hooks/useWindowEvent';
import ImageLoader from '../ImageLoader/imageLoader';
import styles from './gallery.module.scss';

const imgSelector = `img.${styles.masonryContent}`;

const setMasonryItemSize = (masonry, item) => {
  if (!masonry) {
    return;
  }

  const imgElement = item.current.querySelector(imgSelector);
  if (!imgElement) {
    return;
  }

  imgElement.style.height = 'auto';

  const rowGap = parseInt(
      window.getComputedStyle(masonry.current).getPropertyValue('grid-row-gap')
    ),
    rowHeight = parseInt(
      window
        .getComputedStyle(masonry.current)
        .getPropertyValue('grid-auto-rows')
    ),
    gridImagesAsContent = imgElement,
    rowSpan = Math.ceil(
      (item.current
        .querySelector(`.${styles.masonryContent}`)
        .getBoundingClientRect().height +
        rowGap) /
        (rowHeight + rowGap)
    );

  item.current.style.gridRowEnd = 'span ' + rowSpan;
  if (gridImagesAsContent) {
    const width = parseInt(item.current.getAttribute('data-orig-width'));
    const height = parseInt(item.current.getAttribute('data-orig-height'));
    const heightAspectRatio = (item.current.clientWidth * height) / width;

    imgElement.style.height =
      (heightAspectRatio || item.current.clientHeight) + 'px';
  }
};

const compareByName = (src, cmp) =>
  (src.name > cmp.name) - (src.name < cmp.name);

const Gallery = ({ images }) => {
  const masonry = useRef(null);
  let itemsList = new Array();
  useWindowEvent('resize', () => {
    itemsList.forEach(item => setMasonryItemSize(masonry, item));
  });

  return (
    <div className={styles.masonryWrapper}>
      <div className={styles.masonry} ref={masonry}>
        {images
          .sort((a, b) => compareByName(a, b))
          .map(image => {
            let item = useRef(null);
            itemsList.push(item);

            return (
              <div
                key={image.name}
                data-orig-height={image.height}
                data-orig-width={image.width}
                className={styles.masonryItem}
                ref={item}
              >
                <ImageLoader
                  className={styles.masonryContent}
                  src={image.url}
                  description={image.description}
                  alt={image.name}
                  onLoad={() => setMasonryItemSize(masonry, item)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.array,
};

export default Gallery;
