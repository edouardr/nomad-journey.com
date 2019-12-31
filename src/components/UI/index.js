import React from 'react';
import PropTypes from 'prop-types';
import styles from './ui.module.scss';

export const Bounce = () => {
  return <div className={styles.bounce} />;
};

export const BounceDelayed = () => {
  return <div className={styles.bounceDelayed} />;
};

export const Spinner = ({ children }) => {
  return <div className={styles.spinner}>{children}</div>;
};

Spinner.propTypes = {
  children: PropTypes.node,
};
