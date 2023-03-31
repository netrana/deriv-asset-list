import React, { FC } from 'react';
import { DatePicker, Space, Typography } from 'antd';
import classNames from 'classnames';

import { Props } from './types';

const { Text } = Typography;

const DatePickerInput: FC<Props> = (props) => {
  const { title, handleDateChange, className = '', placeholder, format, isBordered, value } = props;
  return (
    <div
      className={classNames({
        [className]: Boolean(classNames),
      })}
    >
      <Text strong>{title}</Text>
      <DatePicker
        onChange={handleDateChange}
        placeholder={placeholder}
        format={format}
        bordered={isBordered}
        value={value}
      />
    </div>
  );
};

export default DatePickerInput;
