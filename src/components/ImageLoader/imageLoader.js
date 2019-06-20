import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styles from './imageLoader.module.scss';

const ImageLoader = React.memo(function ImageLoader({
  alt,
  src,
  className,
  description,
  onLoad,
}) {
  const loadedClassName = styles.imgLoaded;
  const loadingClassName = styles.imgLoading;
  const [loaded, setLoaded] = useState(false);
  const computedClassName = `${className || ''} ${loaded ? loadedClassName : loadingClassName}`;

  const renderDescription = () =>
    description ? (
      <div className={styles.masonryItemDetails}>{description}</div>
    ) : (
        false
      );

  const handleLoad = () => {
    if (onLoad && {}.toString.call(onLoad) === '[object Function]') {
      onLoad();
    }
    setLoaded(true);
  };

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-simple-grey.png" }) {
        childImageSharp {
          fluid(maxWidth: 425) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <div
        className={`${styles.imgLoader} ${loaded ? loadedClassName : loadingClassName}`}
      >
        <Img fluid={data.file.childImageSharp.fluid} alt="Image loader" />
      </div>
      <LazyLoad>
        <img
          src={src}
          onLoad={() => handleLoad()}
          className={computedClassName}
          alt={description || alt}
        />
      </LazyLoad>
      {renderDescription()}
    </>
  );
});

ImageLoader.propTypes = {
  alt: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  onLoad: PropTypes.func,
  src: PropTypes.string,
};

export default ImageLoader;
