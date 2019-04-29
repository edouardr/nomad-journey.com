import React from "react";
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import TransparentHeader from '../Header/transparent';
import styles from './jumbotron.module.scss';

const Jumbotron = ({ item }) => (
  <section className={`${styles.hero} is-medium`}>
    <div className={styles.heroHead}>
      <TransparentHeader lang={item.system.lang} allEdges={item.allEdges} />
    </div>
    <div className={styles.image}>
      <div className={styles.mediaObj}>
        <Img fluid={item.fields.jumbotronImage.childImageSharp.fluid} alt={item.elements.jumbotron__image.value[0].description} />
      </div>
      <div className={`content ${styles.contentWrap}`}>
        <h1 className="title has-text-white is-2 is-spaced is-large">{item.elements.jumbotron__title.value}</h1>
        <div className="subtitle has-text-white is-4" dangerouslySetInnerHTML={{ __html: item.elements.jumbotron__description.value }}></div>
      </div>
    </div>
  </section>
);

Jumbotron.propTypes = {
  item: PropTypes.object
};

export default Jumbotron;
