import React from 'react';
import PropTypes from 'prop-types';
import { PageProvider } from './src/contexts/pageContext';
import { LangProvider } from './src/contexts/langContext';
import './src/utils/fontawesome';
import './src/styles/main.scss';

export const wrapRootElement = ({ element }) => (
  <PageProvider>
    <LangProvider>{element}</LangProvider>
  </PageProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.object,
};
