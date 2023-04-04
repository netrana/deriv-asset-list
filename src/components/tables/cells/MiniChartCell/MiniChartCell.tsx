import { TinyArea } from '@ant-design/plots';
import classnames from 'classnames';
import React, { FC } from 'react';

import { Spin } from 'components/helpers';
import { useAppSelector } from 'store/hooks';
import { selectTicksHistory } from 'store/ticksHistory/selectors';

import styles from './miniChartCell.module.scss';
import { Props } from './types';

export const MiniChartCell: FC<Props> = (props) => {
  const { symbol } = props;
  const ticksHistory = useAppSelector(selectTicksHistory)[symbol];
  const isLoading = ticksHistory?.ticksHistoryRequestStatus === 'started';
  const historyData = ticksHistory?.ticksHistory || [];

  const data = historyData.flatMap((item) => item.close);
  const max = Math.max(...data);
  const maxIndex = data.indexOf(max);
  const min = Math.min(...data);
  const minIndex = data.indexOf(min);

  const config = {
    height: 50,
    width: 200,
    data,
    autoFit: false,
    point: {
      // @ts-ignore
      size: (value) => {
        return value.x === maxIndex.toString() || value.x === minIndex.toString() ? 2 : 0
      },
      share: 'circle',
      // @ts-ignore
      style: (value) => {
        let color = '';
        if(value.x === maxIndex.toString()) {
          color = 'green';
        }
        if(value.x === minIndex.toString()) {
          color = 'red';
        }
        return {
          fill: color
        }
      }
    },
  };

  return (
    <Spin spinning={isLoading}>
      <div
        className={classnames({
          [styles.container]: true,
        })}
      >
        <TinyArea {...config} />
      </div>
    </Spin>
  );
};

export default MiniChartCell;
