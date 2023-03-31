import { Layout } from 'antd';
import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './content.module.scss';
import { Props } from './types';
import { useIsMobile } from 'shared/hooks';

export const Content: FC<Props> = (props) => {
  const { children = true } = props;
  const isMobile = useIsMobile();

  return (
    <Layout.Content
      className={classNames({
        [styles.content]: true,
        [styles['is-mobile']]: isMobile,
      })}
    >
      {/* <Header /> */}
      <div className={styles.main}>
        {/* {leftSection && <LeftSection>{leftSection}</LeftSection>} */}
        <div className={styles.children}>{children}</div>
      </div>
      {/* <Footer>{footer}</Footer> */}
    </Layout.Content>
  );
};

export default Content;
