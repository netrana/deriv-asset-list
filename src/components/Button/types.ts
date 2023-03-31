import { MouseEventHandler } from 'react';
import { ButtonProps } from 'antd/lib/button';

export interface Props extends ButtonProps {
  type?: 'primary' | 'default' | "ghost";
  isBordered?: boolean;
  icon?: JSX.Element
}

export interface GetOnMouseMoveHandler {
  (onMouseMove?: MouseEventHandler<HTMLElement>): MouseEventHandler<HTMLElement>;
}

export type OnClickHandlerForDisabledState = MouseEventHandler<HTMLElement>;
