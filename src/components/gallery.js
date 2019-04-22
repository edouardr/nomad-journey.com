import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import './gallery.css';
import ImageLoader from './imageLoader';

const setMasonryItemSize = (masonry, item) => {

  if (!masonry) {
    return;
  }

  const rowGap = parseInt(window.getComputedStyle(masonry.current).getPropertyValue('grid-row-gap')),
    rowHeight = parseInt(window.getComputedStyle(masonry.current).getPropertyValue('grid-auto-rows')),
    gridImagesAsContent = item.current.querySelector('img.masonry-content');

  const rowSpan = Math.ceil((item.current.querySelector('.masonry-content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

  item.current.style.gridRowEnd = 'span ' + rowSpan;
  if (gridImagesAsContent) {
    item.current.querySelector('img.masonry-content').style.height = item.current.getBoundingClientRect().height + "px";
  }
};

const Gallery = ({ images }) => {
  const masonry = useRef(null);
  return (
    <div className="container">
      <div className="masonry-wrapper">
        <div className="masonry" ref={masonry}>
          {
            images
              .sort((a, b) => (a.name > b.name) - (a.name < b.name))
              .map(image => {
                let item = useRef(null);
                return (
                  <div key={image.name} className="masonry-item" ref={item}>
                    <LazyLoad>
                      <ImageLoader className="masonry-content"
                        src={image.url}
                        description={image.description}
                        onLoad={() => setMasonryItemSize(masonry, item)} />
                    </LazyLoad>
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
