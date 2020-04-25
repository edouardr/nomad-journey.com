import * as React from 'react';
import { render } from '@testing-library/react';
import BackToTop from '../backToTop';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleUp);
describe(`Header`, () => {
  it(`renders backToTop button`, () => {
    const backToTopTitle = `Back To Top`;
    const { getByText } = render(<BackToTop />);

    const title = getByText(backToTopTitle);

    expect(title).toBeInTheDocument();
  });
});
