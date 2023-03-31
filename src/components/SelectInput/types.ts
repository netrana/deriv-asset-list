import { SizeType } from 'antd/lib/config-provider/SizeContext';
import React from 'react';

export type SelectOption = {
  name: string;
  value: number | string;
  className?: string;
};
export interface Props {
  options: SelectOption[];
  title?: string;
  placeholder?: string;
  className?: string;
  bordered?: boolean;
  onChange?: (value: string) => void;
  defaultValue?: string;
  defaultActiveFirstOption?: boolean;
  filterOption?: boolean;
  showSearch?: boolean;
  onSearch?: (value: string) => void;
  notFoundContent?: React.ReactNode;
  onSelect?: (value: string) => void;
  value?: string;
  allowClear?: boolean;
  disabled?: boolean;
  showArrow?: boolean;
  size?: SizeType;
}
