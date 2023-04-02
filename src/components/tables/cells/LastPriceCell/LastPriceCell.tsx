import classnames from 'classnames';
import React, { FC } from 'react';

import { useTicksStream } from 'api/ticks/hooks';
import { useAppSelector } from 'store/hooks';
import { selectTicks } from 'store/ticks/selectors';

import styles from './lastPriceCell.module.scss';
import { Props } from './types';
import { Spin } from 'components/misc/helpers';

export const LastPriceCell: FC<Props> = (props) => {
  const { symbol } = props;
  useTicksStream(symbol);
  const symbolWiseTick = useAppSelector(selectTicks).symbolWiseTicks;
  const tick = symbolWiseTick[symbol]?.tick;
  const getTicksRequestStatus = symbolWiseTick[symbol]?.getTicksRequestStatus;
  const isLoading = getTicksRequestStatus === 'started';

  return (
    <Spin spinning={isLoading}>
      <div
        className={classnames({
          [styles.container]: true,
        })}
      >
        {tick?.quote}
      </div>
    </Spin>
  );
};

export default LastPriceCell;
