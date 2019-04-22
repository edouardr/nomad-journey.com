import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './imageLoader.css';

const ImageLoader = ({ src, className, description, onLoad }) => {
  const loadedClassName = 'img-loaded';
  const loadingClassName = 'img-loading';
  const [loaded, setLoaded] = useState(false);
  const computedClassName = `${className} ${loaded ? loadedClassName : loadingClassName}`;

  const renderDescription = () => (description
    ? (<div className="masonry-item--details" >
        {description}
      </div>)
    : false
  );

  return (
    <>
      <img
        src={src}
        onLoad={() => {onLoad(); setLoaded(true);}}
        className={computedClassName}
        alt={description} />
        {renderDescription()}
    </>
  );
};

ImageLoader.propTypes = {
  description: PropTypes.string,
  className: PropTypes.string,
  onLoad: PropTypes.func,
  src: PropTypes.string,
};

export default ImageLoader;
