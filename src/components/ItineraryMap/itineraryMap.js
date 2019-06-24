import React from 'react';
import PropTypes from 'prop-types';
import styles from './itineraryMap.module.scss';

const ItineraryMap = ({ mapId }) => {
  return (
    <section className="hero is-large">
      <div className={styles.mapContainer}>
        <iframe
          className={styles.frame}
          src={`https://planificateur.a-contresens.net/embed-itineraire/${mapId}-carte?flag=0&style=classic&climate=0&itinerary=0&co2=0&budget=0&centercurrentstep=0&stepnumber=0&futurstep=no`}
          frameBorder="0"
          allowFullScreen={true}
        />
      </div>
    </section>
  );
};

ItineraryMap.propTypes = {
  mapId: PropTypes.string,
};

export default ItineraryMap;
