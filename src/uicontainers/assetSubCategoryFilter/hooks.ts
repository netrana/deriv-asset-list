import React from "react";
import type { RadioChangeEvent } from 'antd';
import { useAppDispatch } from 'store/hooks';
import { setSelectedAssetSubCategory } from 'uicontainers/assetSubCategoryFilter/actions';

export const useOnSubCategoryChange = () => {
  const dispatch = useAppDispatch();
  return React.useCallback(
    ({ target: { value } }: RadioChangeEvent) => {
      dispatch(setSelectedAssetSubCategory(value));
    },
    [setSelectedAssetSubCategory],
  );
};