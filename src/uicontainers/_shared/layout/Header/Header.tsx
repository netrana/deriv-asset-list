import React from 'react';
import { Header as AntdHeader } from 'components/misc/helpers';
import Logo from 'components/misc/Logo';
import classNames from 'classnames';


import styles from './header.module.scss';

export const Header = () => {
  return (
    <AntdHeader
      className={classNames({
        [styles.container]: true,
      })}
    >
      <div className={styles.logo}>
        <Logo />
      </div>
    </AntdHeader>
  );
};

export default Header;
