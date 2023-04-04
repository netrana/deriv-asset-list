import React from 'react';

import { TabPane, Tabs } from 'components/helpers';
import { useAppSelector } from 'store/hooks';

import styles from './assetCategoryFilter.module.scss';
import { useOnCategoryChange } from './hooks';
import { createSelectAssetCategories } from './selectors';

const AssetCategoryFilter = () => {
  const categories = useAppSelector(createSelectAssetCategories);
  const handleOnCategoryChange = useOnCategoryChange();

  React.useEffect(() => {
    handleOnCategoryChange(categories[0]?.id)
  }, [categories]);

  return (
    <div className={styles.bodyContainer}>
      <Tabs defaultActiveKey={categories[0]?.id} onTabClick={handleOnCategoryChange}>
        {categories.map((tab) => (
          <TabPane key={tab.id} tab={tab.name} />
        ))}
      </Tabs>
    </div>
  );
};

export default AssetCategoryFilter;
