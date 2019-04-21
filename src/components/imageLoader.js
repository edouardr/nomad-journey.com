import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './imageLoader.css';

const ImageLoader = ({ src, className }) => {
  const loadedClassName = 'img-loaded';
  const loadingClassName = 'img-loading';
  const [loaded, setLoaded] = useState(false);
  const computedClassName = `${className} ${loaded ? loadedClassName : loadingClassName}`;

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <img
      src={src}
      onLoad={onLoad}
      className={computedClassName} />
  );
};

ImageLoader.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};

export default ImageLoader;
