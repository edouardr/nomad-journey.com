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
      className={`${styles.goTop} ${isVisible ? styles.isVisible : ''}`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon="angle-up" size="2x" color="white" />
    </button>
  );
};

export default BackToTop;
