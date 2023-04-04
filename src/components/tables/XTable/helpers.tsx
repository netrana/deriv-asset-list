import React from 'react';
import { Column } from './types';
import { CELLS } from './constants';
import Header from '../headers/Header';

export const columnConfiguration = (columns: Column[]) => {
  return columns.map((column: Column) => {
    let key = column.key;

    if (!column.key) {
      key = column.name.toLowerCase().replace(/\s/g, '_');
    }

    const title = <Header name={column.name} />;
    return {
      title,
      key,
      dataIndex: key,
      render: column.render || CELLS[column.type],
      width: column.width,
      align: column.align || 'left',
    };
  });
};
