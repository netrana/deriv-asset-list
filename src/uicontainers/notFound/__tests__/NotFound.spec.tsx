import React from 'react';
import render from 'react-test-renderer';

import NotFound from '../NotFound';

jest.mock('components/helpers', () => {
  const actual = jest.requireActual('components/helpers');
  return {
    ...actual,
    Result: 'Result',
  };
});

describe('NotFound', () => {
  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = render.create(<NotFound />);
      expect(component).toMatchSnapshot();
    });
  });
});
