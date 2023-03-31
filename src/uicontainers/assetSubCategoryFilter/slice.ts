import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AssetSubCategoryFilterState } from './types';

const initialState: AssetSubCategoryFilterState = {
  selectedAssetSubCategory: undefined
};

export const assetSubCategoryFilterSlice = createSlice({
  name: 'ui/assetSubCategoryFilterSlice',
  initialState,
  reducers: {
    setSelectedAssetSubCategory(state, action: PayloadAction<string>) {
      state.selectedAssetSubCategory = action.payload;
    },
  },
});

export default assetSubCategoryFilterSlice;
