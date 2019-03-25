import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import SEO from './SEO';

const Layout = ({children, item}) => {

  return (
    <div>
      <SEO item={item} />
      <Header siteTitle={item.elements.page_metadata__og_title.value} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
  item: PropTypes.object
};

export default Layout;
