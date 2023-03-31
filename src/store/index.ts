import { combineReducers as _, configureStore } from '@reduxjs/toolkit';

import storeSymbolsReducer from 'store/symbols/reducer';
import storeTicksReducer from 'store/ticks/reducer';
import storeTicksHistoryReducer from 'store/ticksHistory/reducer';
import assetCategoryFilterReducer from 'uicontainers/assetCategoryFilter/reducer';
import assetSubCategoryFilterReducer from 'uicontainers/assetSubCategoryFilter/reducer';

const rootReducer = _({
  resources: _({
    activeSymbols: storeSymbolsReducer,
    ticks: storeTicksReducer,
    ticksHistory: storeTicksHistoryReducer,
  }),
  ui: _({
    assetCategoryFilter: assetCategoryFilterReducer,
    assetSubCategoryFilter: assetSubCategoryFilterReducer,
  }),
});

export const store = configureStore({
  reducer: rootReducer,
});
