import { Card } from 'antd';
import classNames from 'classnames';
import React, { FC } from 'react';

import Image from 'components/Image';

import styles from './nxCard.module.scss';
import { Props } from './types';

const { Meta } = Card;

const NXCard: FC<Props> = (props) => {
  const {
    children,
    image,
    headerTitle,
    headerActions,
    metaTitle,
    metaDescription,
    footer,
    isBordered = true,
    isHoverable = false,
    isLoading = false,
    cssClassNames = '',
    hasPadding = false,
    onClick,
  } = props;
  return (
    <div
      className={classNames({
        [styles.container]: true,
        [cssClassNames]: Boolean(cssClassNames),
      })}
    >
      <Card
        className={classNames({
          [styles.hasPadding]: hasPadding,
          [styles.hasBorder]: isBordered,
        })}
        onClick={onClick}
        title={headerTitle}
        extra={headerActions}
        cover={
          image !== undefined ? (
            <Image
              className={classNames({
                [styles.borderBottom]: true,
              })}
              src={image}
            />
          ) : null
        }
        actions={footer ? [footer] : []}
        loading={isLoading}
        hoverable={isHoverable}
        bordered={false}
      >
        {metaTitle && <Meta title={metaTitle} description={metaDescription} />}
        {children}
      </Card>
    </div>
  );
};

export default NXCard;
