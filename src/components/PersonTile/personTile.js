import React from 'react';
import PropTypes from 'prop-types';
import ImageLoader from '../ImageLoader/imageLoader';
import styles from './personTile.module.scss';

const PersonTile = ({ person }) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.cardImage} ${styles.ri}`}>
        <figure className={`${styles.image} is-16by9`}>
          <ImageLoader src={person.elements.image.value[0].url} />
        </figure>
      </div>
      <div className={styles.cardContent}>
        {person.elements.interview.map(questionAnswer => (
          <div key={questionAnswer.id} className="content">
            <p className="title is-5">
              {questionAnswer.elements.question.text}
            </p>
            <p className="has-text-black is-5">
              {questionAnswer.elements.answer.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

PersonTile.propTypes = {
  person: PropTypes.object,
};

export default PersonTile;
