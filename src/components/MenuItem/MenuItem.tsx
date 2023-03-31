import React, { FC } from 'react';

import styles from './menuItem.module.scss';
import { MenuItemProps } from './types';

export const ProfileMenu: FC<MenuItemProps> = (props) => {
  const { item, separator = false } = props;

  return (
    <>
      {!separator && (
        <div className={styles.menuItem}>
          <span className={styles.text}>{item}</span>
        </div>
      )}
      {separator && <div className={styles.horizontalLine} />}
    </>
  );
};

export default ProfileMenu;
