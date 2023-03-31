import React, { Column, ColumnConfig } from '@ant-design/plots';
import { Props } from './types';

const BarChart = (props: Props) => {
  const {
    data,
    xField,
    yField,
    xFieldAlias = '',
    yFieldAlias = '',
  } = props;

  const config: ColumnConfig = {
    data,
    autoFit: true,
    isStack: true,
    xField,
    yField,
    seriesField: 'type',
    legend: {
      layout: 'horizontal',
      position: 'bottom'
    },
    columnWidthRatio: 0.8,   
    color: ({ type }) => {
      return '#F2994A';
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      [xField]: {
        alias: xFieldAlias,
      },
      [yField]: {
        alias: yFieldAlias,
      },
    },   
    interactions: [
      {
        type: 'active-region',
        enable: false,
      },
    ],   
  };

  return (
    <Column  {...config}
    />
  );
};

export default BarChart;
