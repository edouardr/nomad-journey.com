import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styles from './imageLoader.module.scss';

const ImageLoader = ({ src, className, description, onLoad }) => {
  const loadedClassName = styles.imgLoaded;
  const loadingClassName = styles.loading;
  const [loaded, setLoaded] = useState(false);
  const computedClassName = `${className} ${loaded ? loadedClassName : loadingClassName}`;

  const renderDescription = () => (description
    ? (<div className={styles.masonryItemDetails} >
      {description}
    </div>)
    : false
  );

  const handleLoad = () => {
    onLoad();
    setLoaded(true);
  };

  return (
    <>
      <StaticQuery
        query={graphql`
          query {
            file(relativePath: { eq: "logo-simple-grey.png" }) {
              childImageSharp {
                fluid(maxWidth: 425) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
            <div className={`${styles.imgLoader} ${loaded ? loadedClassName : loadingClassName}`}>
              <Img fluid={data.file.childImageSharp.fluid} alt="Image loader" />
            </div>
          )
        }
      />
      <LazyLoad>
        <img
          src={src}
          onLoad={() => handleLoad()}
          className={computedClassName}
          alt={description} />
      </LazyLoad>
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