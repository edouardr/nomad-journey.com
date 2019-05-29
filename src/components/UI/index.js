import React from 'react';
import styles from './ui.module.scss';

export const Bounce = () => (<div className={styles.bounce} />);
export const BounceDelayed = () => (<div className={styles.bounceDelayed} />);
export const Spinner = ({children}) => (<div className={styles.spinner}>{children}</div>);
