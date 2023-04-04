import { AlignType } from 'rc-table/lib/interface';
import { FC, ReactNode } from 'react';

export type CellType =
  | 'text'
  | 'image-and-text-cell'
  | 'last-price-cell'
  | 'daily-change-cell'
  | 'mini-chart-cell';
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
  width?: string | number;
  tooltip?: string;
  align?: AlignType;
}

export interface Cells {
  [index: string]: FC<any>; // eslint-disable-line
}

export interface Props<T extends Data, K> {
  data: T[];
  columns: Column[];
  empty?: ((componentName?: string) => ReactNode) | ReactNode;
  tableClassName?: string;
  rowClassName?: string;
  loading?: boolean;
  showPointerOnRowHover?: boolean;
}
