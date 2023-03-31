import React, { FC } from 'react';

import { Switch as AntdSwitch, Typography } from 'antd';
import classNames from 'classnames';

const { Text } = Typography;

import { Props } from './types';
import styles from './switch.module.scss';

const Switch: FC<Props> = (props) => {
  const { title, className = '', ...otherProps } = props;

  return (
    <div
      className={classNames({
        [styles.switch]: true,
        [className]: Boolean(classNames),
      })}
    >
      <AntdSwitch {...otherProps} />
      {!!title ? (
        <Text className={styles.title} strong>
          {title}
        </Text>
      ) : null}
    </div>
  );
};

export default Switch;
