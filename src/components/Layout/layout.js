import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../SEO/SEO';
import Footer from '../Footer/footer';

const Layout = ({children}) => {
  return (
    <>
      <SEO />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.array
};

export default Layout;
