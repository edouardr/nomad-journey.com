import * as React from 'react';
import { render } from '@testing-library/react';
import BackToTop from '../backToTop';

describe(`Header`, () => {
  it(`renders backToTop button`, () => {
    const backToTopTitle = `Back To Top`;
    const { getByText } = render(<BackToTop />);

    const title = getByText(backToTopTitle);

    expect(title).toBeInTheDocument();
  });
});
