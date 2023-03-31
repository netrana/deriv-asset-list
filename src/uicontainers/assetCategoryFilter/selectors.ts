import { createSelector } from 'reselect';
import { findAssetCategories } from "./helpers";
import { selectActiveSymbols } from "store/symbols/selectors";
import { RootState } from 'store/types';

export const createSelectAssetCategories = createSelector(
  selectActiveSymbols,
  findAssetCategories
);

export const selectActiveAssetCategory = (state: RootState) =>
  state.ui.assetCategoryFilter.activeAssetCategory;