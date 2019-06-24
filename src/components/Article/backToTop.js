import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './backToTop.module.scss';
import useWindowEvent from '../../hooks/useWindowEvent';

const BackToTop = () => {
  const [isVisible, setVisibility] = React.useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const position = window.pageYOffset | document.body.scrollTop;
    setVisibility(position > 250);
  };

  useWindowEvent('scroll', handleScroll);

  return (
    <button
      role="button"
      aria-label="back to top"
      tabIndex="-1"
      className={`${styles.goTop} ${isVisible ? styles.isVisible : ''}`}
      onClick={handleClick}
    >
      <span className="is-hidden-touch is-hidden-desktop is-hidden-widescreen is-hidden-fullhd">
        Back To Top
      </span>
      <FontAwesomeIcon icon="angle-up" size="2x" color="white" />
    </button>
  );
};

export default React.memo(BackToTop);
