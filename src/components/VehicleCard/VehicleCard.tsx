import { StarFilled } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { FC } from 'react';

import NXCard from 'components/NXCard';

import { Props } from './types';
import styles from './vehicleCard.module.scss';

const VehicleCard: FC<Props> = (props) => {
  const {
    title,
    cardImage,
    rating,
    tripCount,
    perDayCost = 0,
    isNew = true,
    onClick,
  } = props;
  return (
    <NXCard
      cssClassNames={styles.vehicleCard}
      isBordered={true}
      image={cardImage}
      isHoverable={true}
      metaTitle={title}
      metaDescription={
        <>
          {(rating || rating === 0) && (
            <StarFilled className={styles.starIcon} />
          )}{' '}
          <b>{rating}</b>{' '}
          {tripCount && tripCount !== 0 && (
            <span className={styles.trips}>({tripCount} trips)</span>
          )}
        </>
      }
      footer={
        <>
          <Row className={styles.footerBody}>
            <Col span={16} className={styles.footerLeft}>
              <span> ${perDayCost * 1}/day</span>
            </Col>
            <Col span={8} className={styles.footerRight}>
              {isNew && <span className={styles.statusButton}>New</span>}
            </Col>
          </Row>
        </>
      }
      onClick={onClick}
    />
  );
};

export default VehicleCard;
