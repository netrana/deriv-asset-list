import React, { FC } from 'react';
import { Typography } from 'antd';
import classNames from 'classnames';

import { Props } from './types';

import styles from './eyebrow.module.scss';

const Eyebrow: FC<Props> = (props) => {
  const { children, isMuted = false, className = '' } = props;

  return (
    <Typography.Text
      className={classNames({
        [styles.eyebrow]: true,
        [styles.isMuted]: isMuted,
        [className]: Boolean(className),
      })}
    >
      {children}
    </Typography.Text>
  );
};

export default Eyebrow;
