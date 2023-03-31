// @ts-nocheck
import React, { Pie } from '@ant-design/plots';

import { Props } from './types';

const PieChart = (props: Props) => {
  const {
    data,
    angleField,
    colorField,
    // color = ['#ED213C', '#c7c200', 'rgba(0, 0, 0, 0.54)'],
  } = props;

  const config = {
    appendPadding: 10,
    data,
    angleField,
    colorField,
    // color: color,
    radius: 1,
    innerRadius: 0.6,
    legend: {
      position: 'bottom',
    },
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: undefined,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '',
      },
    },
  };

  return <Pie {...config} />;
};

export default PieChart;
