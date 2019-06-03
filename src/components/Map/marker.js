import React from 'react';
import styles from './marker.module.scss';

const Marker = React.memo(function Marker() {
  return <div className={styles.marker} />;
});

export default Marker;
