import React from 'react';
import { render, cleanup, RenderResult } from '@testing-library/react';
import Fact from './Fact';

let container: RenderResult;

beforeEach(() => {
  container = render(<Fact />);
});

afterEach(cleanup);

describe('Fact Component', () => {
  it('Should display loading text when page loads', () => {
    const loadingDiv = container.queryByTestId('loading-text');
    if (!loadingDiv) {
      throw Error('Loading Div does not exist in the DOM');
    }

    expect(loadingDiv).toBeInTheDocument();
    expect(loadingDiv.innerHTML).toBe('Fact Loading...');
  });

  it('Should display both buttons in button wrap', () => {
    const buttonWrap = container.getByTestId('button-wrap');
    const nextBtn = container.getByTestId('next-btn');
    const shareBtn = container.getByTestId('share-btn');
    expect(buttonWrap).toContainElement(nextBtn);
    expect(buttonWrap).toContainElement(shareBtn);
  });

});
