import { ReactNode } from 'react';

export interface Row {
  text?: string;
  icon?: ReactNode;
  iconTo: string;
  textTo: string;
  isLinkable?: boolean;
  color?: string;
}
export interface Props {
  rows: Row[];
}
