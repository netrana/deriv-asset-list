import React, { FC } from 'react';

import { Props } from './types';

const Image: FC<Props> = (props) => {
  const { src, alt, style, className } = props;

  return (
    <img
      alt={alt}
      style={style}
      className={className}
      src={src || '#'}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src = '';
      }}
    />
  );
};

export default Image;
