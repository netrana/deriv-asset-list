import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestStatus } from 'api/derivWS/types';

import { TicksState } from './types';
import { Tick } from 'api/ticks/types';

const initialState: TicksState = {
  symbolWiseTicks: {},
};

export const ticksSlice = createSlice({
  name: 'store/ticksSlice',
  initialState,
  reducers: {
    setGetTicksRequestStatus(state, action: PayloadAction<{ symbol: string, requestStatus: RequestStatus }>) {
      const { symbol, requestStatus } = action.payload;
      state.symbolWiseTicks[symbol] = { ...state.symbolWiseTicks[symbol], getTicksRequestStatus: requestStatus };
    },
    setTicks(state, action: PayloadAction<{symbol: string, tick: Tick }>) {
      const { symbol, tick } = action.payload;
      state.symbolWiseTicks[symbol] = { ...state.symbolWiseTicks[symbol], tick: tick };
    },
    resetTicksState(state) {
      state.symbolWiseTicks = {};
    },
  },
});

export default ticksSlice;
