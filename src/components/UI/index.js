import React from 'react';
import styles from './ui.module.scss';

export const Bounce = React.memo(function Bounce() {
  return <div className={styles.bounce} />;
});

export const BounceDelayed = React.memo(function BounceDelayed() {
  return <div className={styles.bounceDelayed} />;
});

export const Spinner = React.memo(function Spinner({ children }) {
  return <div className={styles.spinner}>{children}</div>;
});
