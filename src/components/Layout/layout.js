import React from 'react';
import PropTypes from 'prop-types';
import styles from './layout.module.scss';
import SEO from '../SEO/SEO';
import Footer from '../Footer/footer';
import useCurrentPage from '../../hooks/useCurrentPage';

const Layout = ({ codename, children }) => {
  const { currentPage } = useCurrentPage();
  return (
    <>
      <SEO
        codename={codename}
      />
      <div className={styles.layoutWrapper}>
        <div className={styles.layoutInner}>{children}</div>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  codename: PropTypes.string,
};

export default Layout;
