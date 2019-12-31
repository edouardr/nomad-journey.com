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

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();
  headComponents.push([
    <link
      key="gstatic"
      rel="preconnect dns-prefetch"
      href="https://maps.gstatic.com"
    />,
    <link
      key="googleapis"
      rel="preconnect dns-prefetch"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="disqus"
      rel="preconnect dns-prefetch"
      href="https://disqus.com"
    />,
    <link
      key="anomadjourney"
      rel="preconnect dns-prefetch"
      href="https://anomadjourney.disqus.com"
    />,
  ]);
  replaceHeadComponents(headComponents);
};

wrapRootElement.propTypes = {
  element: PropTypes.object,
};
