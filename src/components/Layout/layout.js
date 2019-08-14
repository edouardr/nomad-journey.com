import React from 'react';
import PropTypes from 'prop-types';
import styles from './layout.module.scss';
import SEO from '../SEO/SEO';
import Footer from '../Footer/footer';

const Layout = ({ codename, language, template, children }) => {
  return (
    <>
      <SEO codename={codename} language={language} template={template} />
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
  language: PropTypes.string,
  template: PropTypes.string,
};

export default Layout;
