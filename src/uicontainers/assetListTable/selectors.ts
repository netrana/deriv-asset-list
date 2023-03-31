import { createSelector } from 'reselect';

import { selectActiveSymbols } from "store/symbols/selectors";
import { selectActiveAssetCategory } from "uicontainers/assetCategoryFilter/selectors";
import { selectActiveAssetSubCategory } from "uicontainers/assetSubCategoryFilter/selectors";

import { findFilteredSymbols, transformAssetsToTableData } from "./helpers";

export const createSelectAssetList = createSelector(
  selectActiveSymbols,
  selectActiveAssetCategory,
  selectActiveAssetSubCategory,
  findFilteredSymbols
);

export const createSelectAssetListTableData = createSelector(
  createSelectAssetList,
  transformAssetsToTableData,
);