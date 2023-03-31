import React, { FC } from 'react';
import { Input as AntdInput, Typography } from 'antd';
import classNames from 'classnames';

import { Props } from './types';
import styles from './Input.module.scss';

const { Text } = Typography;

const Input: FC<Props> = (props) => {
  const { label, className = '', inputType = 'text', ...otherProps } = props;

  return (
    <div
      className={classNames({
        [styles.input]: true,
        [className]: Boolean(classNames),
      })}
    >
      {!!label ? (
        <div className={styles.label}>
          <Text strong>{label}</Text>
        </div>
      ) : null}

      {inputType === 'password' ? (
        <AntdInput.Password {...otherProps} />
      ) : (
        <AntdInput {...otherProps} />
      )}
    </div>
  );
};

export default Input;
