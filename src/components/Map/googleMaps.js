import React from 'react';
import GoogleMapReact from 'google-map-react';
import LazyLoad from 'react-lazy-load';
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

  const mapConfig = {
    bootstrapURLKeys: { key: process.env.GATSBY_MAPS_API_KEY },
    center: [
      data.kenticoCloudItemLocation.elements.latitude.number,
      data.kenticoCloudItemLocation.elements.longitude.number,
    ],
    zoom: 7
  };

  return (
    <div className={styles.map}>
      <LazyLoad height="45vh">
        <GoogleMapReact {...mapConfig}>
          <Marker
            lat={data.kenticoCloudItemLocation.elements.latitude.number}
            lng={data.kenticoCloudItemLocation.elements.longitude.number}
          />
        </GoogleMapReact>
      </LazyLoad>
    </div>
  );
};

export default GoogleMaps;
