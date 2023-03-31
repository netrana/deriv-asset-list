import { createSelector } from 'reselect';
import { findAssetSubCategories } from "./helpers";
import { selectActiveSymbols } from "store/symbols/selectors";
import { selectActiveAssetCategory } from "uicontainers/assetCategoryFilter/selectors";
import { RootState } from 'store/types';

export const createSelectAssetSubCategories = createSelector(
  selectActiveSymbols,
  selectActiveAssetCategory,
  findAssetSubCategories
);

export const selectActiveAssetSubCategory = (state: RootState) =>
  state.ui.assetSubCategoryFilter.selectedAssetSubCategory;