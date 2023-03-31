import React, { FC } from 'react';
import { Select, Text, SelectOption } from 'components/misc/helpers';
import classNames from 'classnames';

import { Props } from './types';
import styles from './selectInput.module.scss';

const SelectInput: FC<Props> = (props) => {
  const {
    title,
    placeholder,
    options,
    onChange,
    className = '',
    defaultValue,
    bordered,
    allowClear = true,
    onSearch,
    showSearch,
    notFoundContent,
    filterOption,
    onSelect,
    value,
    disabled,
    size,
    showArrow,
  } = props;

  return (
    <div
      className={classNames({
        [styles.select]: true,
        [className]: Boolean(classNames),
      })}
    >
      {!!title ? (
        <div className={styles.title}>
          <Text strong>{title}</Text>
        </div>
      ) : null}
      <Select
        className={className}
        size={size}
        disabled={disabled}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        bordered={bordered}
        allowClear={allowClear}
        onSearch={onSearch}
        showSearch={showSearch}
        notFoundContent={notFoundContent}
        filterOption={filterOption}
        onSelect={onSelect}
        value={value}
        showArrow={showArrow}
      >
        {options.map(({ name, value }, index) => (
          <SelectOption value={value} key={index}>
            {name}
          </SelectOption>
        ))}
      </Select>
    </div>
  );
};

export default SelectInput;
