import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './poweredBy.module.scss';

export default () => (
  <span className={styles.sponsor}>
    Powered by{` `}
    <a href="https://algolia.com">
      <FontAwesomeIcon icon={['fab', 'algolia']} size="1x" /> Algolia
    </a>
  </span>
);
