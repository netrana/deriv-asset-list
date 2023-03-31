import React, { FC } from 'react';

import { Props } from './types';

export const LinkCell: FC<Props> = (props) => {
  const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return (
    <a href={props.link || '#'} onClick={onClick}>
      {props.text}
    </a>
  );
};

export default LinkCell;
