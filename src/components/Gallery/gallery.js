import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useWindowEvent } from '../../hooks/useWindowEvent';
import ImageLoader from '../ImageLoader/imageLoader';
import './gallery.css';

const setMasonryItemSize = (masonry, item) => {
  if (!masonry) {
    return;
  }
  item.current.querySelector('img.masonry-content').style.height = 'auto';

  const rowGap = parseInt(window.getComputedStyle(masonry.current).getPropertyValue('grid-row-gap')),
    rowHeight = parseInt(window.getComputedStyle(masonry.current).getPropertyValue('grid-auto-rows')),
    gridImagesAsContent = item.current.querySelector('img.masonry-content'),
    rowSpan = Math.ceil((item.current.querySelector('.masonry-content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

  item.current.style.gridRowEnd = 'span ' + rowSpan;
  if (gridImagesAsContent) {
    item.current.querySelector('img.masonry-content').style.height = item.current.getBoundingClientRect().height + 'px';
  }
};

const compareByName = (src, cmp) => (src.name > cmp.name) - (src.name < cmp.name);

const Gallery = ({ images }) => {
  const masonry = useRef(null);
  let itemsList = new Array();
  useWindowEvent('resize', () => {
    itemsList.forEach((item) => setMasonryItemSize(masonry, item));
  });

  return (
    <div className="container">
      <div className="masonry-wrapper">
        <div className="masonry" ref={masonry}>
          {
            images
              .sort((a, b) => compareByName(a, b))
              .map(image => {
                let item = useRef(null);
                itemsList.push(item);
                return (
                  <div key={image.name} className="masonry-item" ref={item}>
                    <ImageLoader className="masonry-content"
                      src={image.url}
                      description={image.description}
                      onLoad={() => setMasonryItemSize(masonry, item)} />
                  </div>
                );
              })
          }
        </div>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.array
};

export default Gallery;
