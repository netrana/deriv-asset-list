import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Props } from './types';
import styles from './iconLinkAndTextCell.module.scss';

export const IconLinkAndTextCell: FC<Props> = (props) => {
  const { rows } = props;

  return (
    <>
      {rows.map(
        ({ iconTo, textTo, icon, isLinkable = true, text, color }, index) => (
          <React.Fragment key={`icon-link-and-text-cell-${text}-${index}`}>
            <div className={styles.container}>
              <span className={styles.content}>{text}</span>
              {icon && isLinkable && (
                <Link to={iconTo} className={styles.content}>
                  <span
                    className={classNames({
                      [styles.iconWrapper]: true,
                      [styles.pink]: color === 'pink',
                      [styles.green]: color === 'green',
                    })}
                  >
                    {icon}
                  </span>
                </Link>
              )}
              {icon && !isLinkable && (
                <span
                  className={classNames({
                    [styles.iconWrapper]: true,
                    [styles.pink]: color === 'pink',
                    [styles.green]: color === 'green',
                  })}
                >
                  {icon}
                </span>
              )}
            </div>
          </React.Fragment>
        )
      )}
    </>
  );
};

export default IconLinkAndTextCell;
