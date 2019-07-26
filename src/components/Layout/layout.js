import React from 'react';
import PropTypes from 'prop-types';
import styles from './layout.module.scss';
import SEO from '../SEO/SEO';
import Footer from '../Footer/footer';

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className={styles.layoutWrapper}>
        <div className={styles.layoutInner}>{children}</div>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
