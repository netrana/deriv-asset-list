import { FC } from "react";
import { Popover as AntdPopover } from "antd";

import { Props } from './types';

export const Popover: FC<Props> = (props) => {
    const { content, children, placement = 'bottomLeft', trigger='click' } = props

  return (
    <AntdPopover placement={placement} content={content} trigger={trigger}>
      {children}
    </AntdPopover>
  );
};

export default Popover;
