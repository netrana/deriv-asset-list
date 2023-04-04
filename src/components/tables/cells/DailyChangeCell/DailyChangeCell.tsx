import classnames from 'classnames';
import React, { FC } from 'react';

import { Spin } from 'components/helpers';
import { useAppSelector } from 'store/hooks';
import { selectTicks } from 'store/ticks/selectors';
import { selectTicksHistory } from 'store/ticksHistory/selectors';

import styles from './dailyChangeCell.module.scss';
import { Props } from './types';

export const DailyChangeCell: FC<Props> = (props) => {
  const { symbol } = props;
  const symbolWiseTick = useAppSelector(selectTicks).symbolWiseTicks;
  const tick = symbolWiseTick[symbol]?.tick;
  const getTicksRequestStatus = symbolWiseTick[symbol]?.getTicksRequestStatus;
  
  const ticksHistory = useAppSelector(selectTicksHistory)[symbol];
  const lastDayClosingPrice = ticksHistory?.ticksHistory && ticksHistory?.ticksHistory.length > 0 ? ticksHistory.ticksHistory[0]?.close : 0;
  const currentPrice = tick?.quote || 0;
  const isPositive = currentPrice - lastDayClosingPrice >= 0

  const isHistoryLoading = ticksHistory?.ticksHistoryRequestStatus === 'started';
  const isTicksLoading = getTicksRequestStatus === 'started';

  const isLoading = isHistoryLoading && isTicksLoading;

  return (
    <Spin spinning={isLoading}>
      <div
        className={classnames({
          [styles.container]: true,
          [styles.positive]: isPositive,
          [styles.negative]: !isPositive,
        })}
      >
        {currentPrice && lastDayClosingPrice && currentPrice - lastDayClosingPrice}
      </div>
    </Spin>
  );
};

export default DailyChangeCell;
