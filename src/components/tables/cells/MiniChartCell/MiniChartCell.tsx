import { TinyArea, } from '@ant-design/plots';
import classnames from 'classnames';
import React, { FC } from 'react';

import { useGetTicksHistory } from 'api/ticksHistory/hooks';
import { TickHistoryStyle, TicksHistoryRequest } from 'api/ticksHistory/types';
import { Spin } from 'components/misc/helpers';
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
    autoFit: true,
    data,
    smooth: true,
    areaStyle: {
      fill: '#d6e3fd',
    },
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

  const getTicksHistory = useGetTicksHistory();
  const ticks_history_request: TicksHistoryRequest = {
    ticks_history: symbol,
    adjust_start_time: 1,
    granularity: 7200,
    end: "latest",
    start: 1,
    style: TickHistoryStyle.CANDLES,
  };

  React.useEffect(() => {
    getTicksHistory(ticks_history_request);
  }, []);;

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
