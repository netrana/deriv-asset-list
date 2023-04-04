import React from 'react';
import render from 'react-test-renderer';

import NXTable from '../XTable';
import { Column } from '../types';

jest.mock('components/helpers', () => {
  const actual = jest.requireActual('components/helpers');
  return {
    ...actual,
    Table: 'Table',
  };
});

React.useEffect = jest.fn((c) => c());

describe('NXTable tests', () => {
  afterEach(() => jest.clearAllMocks());
  describe('Snapshot', () => {

    const DATA = [
      {
        key: '1',
        name: {
          text: 'Test name',
        },
        clients: {
          profession: 'Test profession',
        },
      },
    ];

    const COLUMNS: Column[] = [
      {
        name: 'Name',
        type: 'text',
      },
      {
        name: 'Profession',
        type: 'text',
      },
    ];

    it('should render with default props', () => {
      const component = render.create(<NXTable data={DATA} columns={COLUMNS} />);
      expect(component).toMatchSnapshot();
    });
  });
});
