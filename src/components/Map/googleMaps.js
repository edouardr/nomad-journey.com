import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useStaticQuery, graphql } from 'gatsby';
import Marker from './marker';
import styles from './googleMaps.module.scss';

const GoogleMaps = () => {
  const data = useStaticQuery(graphql`
    query {
      kenticoCloudItemLocation {
        elements {
          latitude {
            number
          }
          longitude {
            number
          }
        }
      }
    }
  `);

  return (
    <div className={styles.map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.MAPS_API_KEY }}
        center={[data.kenticoCloudItemLocation.elements.latitude.number,data.kenticoCloudItemLocation.elements.longitude.number]}
        zoom={7}
      >
        <Marker
          lat={data.kenticoCloudItemLocation.elements.latitude.number}
          lng={data.kenticoCloudItemLocation.elements.longitude.number}
        />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMaps;
