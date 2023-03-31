import { LabeledValue } from 'antd/lib/select';
import React from 'react';

import { Props } from './types';

export const onClickHandler = (props: Props, button: LabeledValue) => (
  event: React.MouseEvent<HTMLElement>,
) => {
  event.stopPropagation();
  const hookEvent = props?.useHook() || (() => {});
  return hookEvent(button);
};
