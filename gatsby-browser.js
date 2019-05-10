import React from 'react';
import PropTypes from 'prop-types';
import { PageProvider } from './src/contexts/pageContext';
import { LangProvider } from './src/contexts/langContext';
import { setConfig } from 'react-hot-loader';
import './src/styles/main.scss';

setConfig({ pureSFC: true });
export const wrapRootElement = ({ element }) => (
  <PageProvider>
    <LangProvider>
      {element}
    </LangProvider>
  </PageProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.object
};
