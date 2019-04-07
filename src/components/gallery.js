import React from 'react';
import PropTypes from 'prop-types';
import './gallery.css';

const getMasonryItemSize = (masonry, item) => {
  /* Get row-gap and the size of its implicit rows */
  const rowGap = parseInt(window.getComputedStyle(masonry).getPropertyValue('grid-row-gap')),
      rowHeight = parseInt(window.getComputedStyle(masonry).getPropertyValue('grid-auto-rows'));

  /*
   * Spanning for any brick = S
   * Grid's row-gap = G
   * Size of grid's implicitly create row-track = R
   * Height of item content = H
   * Net height of the item = H1 = H + G
   * Net height of the implicit row-track = T = G + R
   * S = H1 / T
   */
  const rowSpan = Math.ceil((item.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

  return `span ${rowSpan}`;
};

const Gallery = ({ images }) => {
  const masonry = React.createRef();
  return (
    <div className="masonry-wrapper">
      <div className="masonry" ref={masonry}>
      {
        images.map(image => {
          let img = React.createRef();
          return (
            <div key={image.name} className="masonry-item" style={{gridRowEnd: 'span 33'}}>
              <img ref={img} src={image.url} className="masonry-content" alt={image.description} />
            </div>
          );
        })
      }
    </div>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.array
};

export default Gallery;
