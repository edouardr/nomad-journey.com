import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/header';
import SEO from '../SEO/SEO';
import Footer from '../Footer/footer';

const Layout = ({children, item}) => {
  return (
    <>
      <SEO item={item} />
      <Header lang={item.system.language} allEdges={item.allEdges} />
      <div>
        {children}
      </div>
      <Footer lang={item.system.language} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
  item: PropTypes.object,
};

export default Layout;
