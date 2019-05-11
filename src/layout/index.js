import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../components/SEO/SEO';
import Footer from '../components/Footer/footer';

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
  children: PropTypes.object
};

export default Layout;
