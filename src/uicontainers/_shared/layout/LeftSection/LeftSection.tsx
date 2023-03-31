import React, { FC } from 'react';

import styles from './leftSection.module.scss';

export const LeftSection: FC = (props) => {
  const { children } = props;

  return <div className={styles.leftSection}>{children}</div>;
};

export default LeftSection;
