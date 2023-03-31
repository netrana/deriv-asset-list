import { Link } from 'react-router-dom';
import { Progress, Tag } from 'antd';
import classnames from 'classnames';
import React, { FC } from 'react';
import styles from './healthCell.module.scss';
import { Props } from './types';

export const HealthCell: FC<Props> = (props) => {
  const { tags, groups } = props;

  const isConfiguredWithProgress = props.progressStatus !== undefined;
  const containerClassnames = classnames(styles.container, {
    [styles.leftAlignedContainer]: !isConfiguredWithProgress,
  });
  return (
    <div className={containerClassnames}>
      {groups?.map((group) => (
        <div key={group.name} className={styles.group}>
          {group.tags.map(({ name, color }, index) => (
            <div className={styles.rowTag} key={`${group.name}-${name}-${color}-${index}`}>
              <Tag color={color}>{name || '--'}</Tag>
            </div>
          ))}
        </div>
      ))}
      {tags?.map(({ name, color, linkTo }, index) => (
        <div key={`${name}-${color}-${index}`} className={styles.colTag}>
          {linkTo ? <Link to={linkTo}>{name}</Link> : <Tag color={color}>{name || '--'}</Tag>}
        </div>
      ))}
      {isConfiguredWithProgress ? (
        <Progress status={props.progressStatus} percent={props.progressPercent} showInfo={false} />
      ) : null}
    </div>
  );
};

export default HealthCell;
