import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import SEO from './SEO';

const Layout = ({children, item}) => {
  return (
    <div>
      <SEO item={item} />
      <Header lang={item.fields.language}/>
      <div>
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
  item: PropTypes.object,
};

export default Layout;
