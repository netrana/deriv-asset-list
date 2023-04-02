import React from "react";

import { useAppDispatch } from 'store/hooks';
import { setSelectedAssetCategory } from 'uicontainers/assetCategoryFilter/actions';
import { setSelectedAssetSubCategory } from 'uicontainers/assetSubCategoryFilter/actions';

export const useOnCategoryChange = () => {
  const dispatch = useAppDispatch();
  return React.useCallback(
    (key: string) => {
      dispatch(setSelectedAssetCategory(key));
      dispatch(setSelectedAssetSubCategory(''));
    },
    [setSelectedAssetCategory],
  );
};