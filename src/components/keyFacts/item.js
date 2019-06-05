import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './item.module.scss';

const KeyFact = React.memo(function KeyFact({ keyFact }) {
  return (
    <div className="has-text-centered features">
      <span className={`${styles.icon} is-size-1`}>
        <FontAwesomeIcon
          icon={[
            keyFact.elements.icon_group.value,
            keyFact.elements.icon.value,
          ]}
        />
      </span>
      <p className="title is-2">
        <strong>{keyFact.elements.value.value}</strong>
      </p>
      <p className="subtitle">{keyFact.elements.title.value}</p>
    </div>
  );
});

KeyFact.propTypes = {
  keyFact: PropTypes.object,
};

export default KeyFact;
