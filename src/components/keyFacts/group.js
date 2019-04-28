import React from "react";
import PropTypes from 'prop-types';
import KeyFact from './item';
import styles from './group.module.scss';

const KeyFactGroup = ({ keyFacts }) => (
  <div className="columns is-multiline">
    {
      keyFacts.map(keyFact => (
        <div key={keyFact.id} className={`column is-one-third ${styles.keyFact}`}>
          <KeyFact keyFact={keyFact} />
        </div>
      ))
    }
  </div>
);

KeyFactGroup.propTypes = {
  keyFacts: PropTypes.array,
};

export default KeyFactGroup;
