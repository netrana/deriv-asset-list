import { StarFilled } from '@ant-design/icons';
import React from 'react';

import NXCard from 'components/NXCard';

import styles from './providerCard.module.scss';
import { Props } from './types';

const ProviderCard = (props: Props) => {
  const { imgSrc, onClick, primaryTitle, tripCount, rating } = props;

  return (   
      <NXCard
        cssClassNames={styles.providerCard}
        isBordered={true}
        image={imgSrc}
        isHoverable={true}
        metaTitle={primaryTitle}
        metaDescription={<>
          {(rating || rating === 0) && (
            <StarFilled className={styles.starIcon} />
          )}{' '}
          <b>{rating}</b>{' '}
          {tripCount && tripCount !== 0 && (
            <span className={styles.trips}>({tripCount} trips)</span>
          )}
        </>}        
        onClick={onClick}
      />
  );
};

export default ProviderCard;
