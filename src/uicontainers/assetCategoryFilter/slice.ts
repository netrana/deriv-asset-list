import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AssetCategoryFilterState } from './types';

const initialState: AssetCategoryFilterState = {
  activeAssetCategory: ''
};

export const assetCategoryFilterSlice = createSlice({
  name: 'ui/assetCategoryFilterSlice',
  initialState,
  reducers: {
    setSelectedAssetCategory(state, action: PayloadAction<string>) {
      state.activeAssetCategory = action.payload;
    },
  },
});

export default assetCategoryFilterSlice;
