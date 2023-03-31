import { FC, ReactNode } from 'react';
import { List } from 'immutable';
import { FormInstance } from 'antd/lib/form';
import { TableRowSelection } from 'antd/lib/table/interface';
import { AlignType } from 'rc-table/lib/interface';

export interface ColumnFilterOption {
  value: string;
  label: string;
}
export interface ColumnFilter {
  name: string;
  useHook?: (name: string) => (value?: string) => void;
  debounced?: boolean;
  type?: 'SELECT' | 'INPUT' | 'KEY_VALUE' | 'CUSTOM' | 'INPUT_NO_FORM_ITEM';
  customRender?: () => ReactNode;
  selectOptions?: ColumnFilterOption[];
}

export type CellType =
  | 'replies'
  | 'number-and-percent'
  | 'number-and-percent-horizontal'
  | 'action'
  | 'text'
  | 'health'
  | 'tooltip-number-and-percent'
  | 'tooltip-health'
  | 'form-select-cell'
  | 'form-text-cell'
  | 'link'
  | 'copy-to-clipboard'
  | 'image-and-text-cell'
  | 'icon-link-and-text-cell'
  | 'tooltip-and-button-cell'
  | 'linkedin-cell'
  | 'job-history-cell'
  | 'text-rows-cell'
  | 'text-and-error-cell'
  | 'action-button-cell'
  | 'linkedin-and-job-history-cell'
  | 'date'
  | 'datetime'
  | 'upcoming-project'
  | 'past-project'
  | 'draft-project'
  | 'star-rating'
  | 'last-price-cell'
  | 'daily-change-cell'
  | 'mini-chart-cell'
  | 'form-checkbox';

export interface Data {
  key?: string;
}
export interface RenderedCell {
  props?: {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    colSpan?: number;
    rowSpan?: number;
  };
  children?: React.ReactNode;
}

export interface Column {
  name: string;
  type: CellType;
  key?: string;
  dataIndex?: string;
  render?: (
    value: any, // eslint-disable-line
    record: any, // eslint-disable-line
    index: number
  ) => ReactNode | RenderedCell;
  filter?: ColumnFilter;
  width?: string | number;
  tooltip?: string;
  align?: AlignType;
}

export interface Cells {
  [index: string]: FC<any>; // eslint-disable-line
}

export interface PaginationProps {
  count: number;
  currentPage: number;
  limit?: number;
  onChange: (page: number, pageSize?: number) => void;
  showQuickJumper?: boolean;
  defaultCurrent?: number;
  showSizeChanger?: boolean;
}


export interface Props<T extends Data, K> {
  data: T[];
  columns: Column[];
  pagination?: PaginationProps;
  empty?: ((componentName?: string) => ReactNode) | ReactNode;
  onRowClick?: (record: T) => void;
  tableClassName?: string;
  rowClassName?: string;
  formConfig?: {
    antdForm: FormInstance;
    initialValues?: K;
    onValuesChange?: (changedValues: K, values: K) => void;
  };
  loading?: boolean;
  rowSelection?: TableRowSelection<T>;
  showPointerOnRowHover?: boolean;
  dataCy?: string;
}
