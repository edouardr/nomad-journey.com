import React from 'react';
import PropTypes from 'prop-types';
import styles from './layout.module.scss';

const Layout = React.memo(function Layout({ children }) {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.layoutInner}>{children}</div>
    </div>
  );
});

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
