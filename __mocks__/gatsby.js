/* eslint-disable no-unused-vars */
import * as React from 'react';
const gatsby = jest.requireActual('gatsby');
module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest
    .fn()
    .mockImplementation(
      ({
        activeClassName,
        activeStyle,
        getProps,
        innerRef,
        partiallyActive,
        ref,
        replace,
        to,
        ...rest
      }) =>
        React.createElement('a', {
          ...rest,
          href: to,
        }),
    ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
};