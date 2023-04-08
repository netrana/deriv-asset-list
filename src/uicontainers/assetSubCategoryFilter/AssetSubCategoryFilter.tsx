import React from 'react';

import { RadioGroup } from 'components/helpers';
import { useAppSelector } from 'store/hooks';
import { useOnSubCategoryChange } from 'uicontainers/assetSubCategoryFilter/hooks';
import { createSelectAssetSubCategories, selectActiveAssetSubCategory } from 'uicontainers/assetSubCategoryFilter/selectors';

import styles from './assetSubCategoryFilter.module.scss';

const AssetSubCategoryFilter = () => {
  const subCategories = useAppSelector(createSelectAssetSubCategories);
  const selectedSubCategory = useAppSelector(selectActiveAssetSubCategory);
  const handleOnSubcategoryChange = useOnSubCategoryChange();

  const selectedValue = selectedSubCategory || subCategories[0]?.value;

  const targetValue = {
    target: {
      value: selectedValue,
    }
  };
  
  React.useEffect(() => {
    // @ts-ignore
    handleOnSubcategoryChange(targetValue);
  }, [selectedSubCategory, subCategories]);

  return (
    <div className={styles.bodyContainer}>
      <RadioGroup
        options={subCategories}
        value={selectedValue}
        optionType="button"
        buttonStyle="solid"
        onChange={handleOnSubcategoryChange}
      />
    </div>
  );
};

export default AssetSubCategoryFilter;
