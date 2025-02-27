import React, { FC } from 'react';

import { Space } from 'components/helpers';

import styles from './imageAndTextCell.module.scss';
import { Props } from './types';

export const ImageAndTextCell: FC<Props> = (props) => {
  const { text, image } = props;

  return (
    <div className={styles.root}>
      <Space size='large'>
        {image}{text}
      </Space>
    </div>
  );
};

export default ImageAndTextCell;
