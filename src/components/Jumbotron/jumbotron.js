import React from "react";
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import Img from 'gatsby-image';
import TransparentHeader from '../Header/transparent';
import styles from './jumbotron.module.scss';

const Jumbotron = ({ item, allEdges }) => (
  <section className={`${styles.hero} is-medium`}>
    <div className={styles.heroHead}>
      <TransparentHeader lang={item.system.language} allEdges={allEdges || item.allEdges} />
    </div>

    <Link to={`${item.system.language}/${item.elements.slug.value}`}>
      <div className={styles.heroBody}>
        <div className={styles.image}>
          <div className={styles.mediaObj}>
            <Img fluid={item.fields.jumbotronImage.childImageSharp.fluid}
              alt={item.elements.jumbotron__image.value[0].description}
              style={{ position: 'unset' }} />
          </div>
          <div className={`content ${styles.contentWrap}`}>
            <h1 className="title has-text-white is-2 is-spaced is-large">{item.elements.jumbotron__title.value}</h1>
            <div className="subtitle has-text-white is-4" dangerouslySetInnerHTML={{ __html: item.elements.jumbotron__description.value }}></div>
          </div>
        </div>
      </div>
    </Link>
  </section>
);

Jumbotron.propTypes = {
  item: PropTypes.object,
  allEdges: PropTypes.array
};

export default Jumbotron;