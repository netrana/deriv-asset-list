import React, { FC } from 'react';
import classnames from 'classnames';

import styles from './textCell.module.scss';
import { Props } from './types';

export const TextCell: FC<Props> = (props) => {
  return (
    <div
      className={classnames({
        [styles.container]: true,
        [styles.bold]: props.fontWeight === 'bold',
      })}
    >
      {Array.isArray(props.text)
        ? props.text.map((text, index) => (
            <div className={styles.row} key={`${text}-${index}`}>
              {text}
            </div>
          ))
        : props.text}
    </div>
  );
};

export default TextCell;
