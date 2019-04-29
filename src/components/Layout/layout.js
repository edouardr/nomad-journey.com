import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../SEO/SEO';
import Footer from '../Footer/footer';

const Layout = ({children, item}) => {
  return (
    <>
      <SEO item={item} />
      {children}
      <Footer lang={item.system.language} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.array,
  item: PropTypes.object,
};

export default Layout;
