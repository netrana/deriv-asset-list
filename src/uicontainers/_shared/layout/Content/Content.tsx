import classNames from 'classnames';
import React, { FC } from 'react';

import { Content as AntdContent } from 'components/helpers';

import styles from './content.module.scss';
import { Props } from './types';

export const Content: FC<Props> = (props) => {
  const { children = true } = props;

  return (
    <AntdContent
      className={classNames({
        [styles.content]: true,
      })}
    >
      <div className={styles.main}>
        <div className={styles.children}>{children}</div>
      </div>
    </AntdContent>
  );
};

export default Content;
