import { Layout } from 'antd';
import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './content.module.scss';
import { Props } from './types';

export const Content: FC<Props> = (props) => {
  const { children = true } = props;

  return (
    <Layout.Content
      className={classNames({
        [styles.content]: true,
      })}
    >
      <div className={styles.main}>
        <div className={styles.children}>{children}</div>
      </div>
    </Layout.Content>
  );
};

export default Content;
