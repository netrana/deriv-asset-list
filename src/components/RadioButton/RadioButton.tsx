import React, { FC } from 'react';
import { Radio, Typography } from 'antd';
import classNames from 'classnames';

import { Props } from './types';
import styles from './radioButton.module.scss';

const { Text } = Typography;

const RadioButton: FC<Props> = (props) => {
  const { disabled, title, options, onChange, value, className = '', defaultValue = undefined } = props;

  return (
    <div
      className={classNames({
        [styles.radio]: true,
        [className]: Boolean(classNames),
      })}
    >
      {!!title ? (
        <div className={styles.title}>
          <Text strong>{title}</Text>
        </div>
      ) : null}
      <Radio.Group disabled={disabled} options={options} onChange={onChange} value={value} className={styles.radio} defaultValue={defaultValue} />
    </div>
  );
};

export default RadioButton;
