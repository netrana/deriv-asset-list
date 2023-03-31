import React, { FC } from 'react';
import moment from 'moment';

import { DATE_FORMAT } from './constants';
import { Props } from './types';
import styles from './dateTimeCell.module.scss';

export const DateCell: FC<Props> = (props) => {
  return <div className={styles.container}>{moment(props.date).format(DATE_FORMAT)}</div>;
};

export default DateCell;
