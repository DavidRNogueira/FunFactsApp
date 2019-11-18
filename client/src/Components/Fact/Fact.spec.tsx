import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Fact from './Fact';

afterEach(cleanup);

describe('Fact Component', () => {
  const container = render(<Fact />);

  it('Should display loading text when page loads', () => {
    const loadingDiv = container.queryByTestId('loading-text');
    expect(loadingDiv).toBeInTheDOM();
  });
});
