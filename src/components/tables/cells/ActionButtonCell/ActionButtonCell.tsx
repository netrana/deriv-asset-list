import { Button } from 'antd';
import React, { FC } from 'react';
import { useAppDispatch } from 'store/hooks';

import styles from './actionButtonCell.module.scss';
import { Props } from './types';

export const ActionButtonCell: FC<Props> = (props) => {
  if (!props?.buttons) return null;
  const hook = props.useHook;
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container} onClick={(e)=>e.stopPropagation()}>
      {props.buttons.map(({ label, onClick, icon }, index) => (
        <Button
          key={index}
          type="primary"
          onClick={(e) => {
            e.stopPropagation();
            if (hook) {
              dispatch(hook());
            } else {
              onClick();
            }
          }}
          shape="round"
          icon={icon}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default ActionButtonCell;
