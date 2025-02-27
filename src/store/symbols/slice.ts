import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestStatus } from 'api/derivWS/types';
import { ActiveSymbol } from 'api/symbols/types';

import { SymbolsState } from './types';

const initialState: SymbolsState = {
  activeSymbols: [],
  getActiveSymbolsRequestStatus: 'initial',
};

export const symbolsSlice = createSlice({
  name: 'store/symbolsSlice',
  initialState,
  reducers: {
    setGetActiveSymbolsRequestStatus(state, action: PayloadAction<RequestStatus>) {
      state.getActiveSymbolsRequestStatus = action.payload;
    },
    setActiveSymbols(state, action: PayloadAction<ActiveSymbol[]>) {
      state.activeSymbols = action.payload;
    },
  },
});

export default symbolsSlice;
