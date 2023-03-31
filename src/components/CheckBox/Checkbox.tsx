import React, { FC } from 'react';
import { Checkbox as AntdCheckbox } from 'antd';
import classNames from 'classnames';

import { Props } from './types';
import styles from './checkBox.module.scss';

const Checkbox: FC<Props> = (props) => {
  const { children, className = '', ...otherProps } = props;

  return (
    <AntdCheckbox
      className={classNames({
        [styles.checkbox]: true,
        [className]: Boolean(classNames),
      })}
      {...otherProps}
    >
      {children}
    </AntdCheckbox>
  );
};

export default Checkbox;
