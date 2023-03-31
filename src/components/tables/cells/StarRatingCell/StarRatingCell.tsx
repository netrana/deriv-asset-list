import React, { FC } from 'react';
import { Rate } from 'antd';
import { Props } from './types';

import styles from './starRatingCell.module.scss';

export const StarRatingCell: FC<Props> = (props) => {
  return <Rate className={styles.container} value={props.rating} />;
};

export default StarRatingCell;
