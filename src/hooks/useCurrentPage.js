import React from 'react';
import { PageContext } from '../contexts/pageContext';

const useCurrentPage = () => {
  const context = React.useContext(PageContext);
  if (!context) {
    throw new Error('usePageContext must be used within a PageContextProvider');
  }

  const { currentPage, dispatch } = context;
  const definePage = page => {
    dispatch({ type: 'update', playload: page });
  };

  return {
    currentPage,
    definePage,
  };
};

export default useCurrentPage;
