import React from 'react';
import render from 'react-test-renderer';

import SelectInput from '../SelectInput';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  FC: jest.fn(),
}));

jest.mock('components/misc/helpers', () => ({
  ...jest.requireActual('components/misc/helpers'),
  Select: 'Select',
  Text: 'Text',
  SelectOption: 'SelectOption',
}));

describe('SelectInput component test', () => {
  describe('snapshot', () => {
    it('should match snapshot', () => {
      const tree = render
        .create(
          <SelectInput
            options={[
              {
                name: 'test',
                value: 'test',
              },
            ]}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
