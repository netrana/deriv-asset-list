import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RequestStatus } from 'api/derivWS/types';

import { TicksHistory, TicksHistoryState } from './types';

const initialState: TicksHistoryState = {
  symbolWiseHistories: {}
};

export const ticksHistorySlice = createSlice({
  name: 'store/ticksHistorySlice',
  initialState,
  reducers: {
    setGetTicksHistoryRequestStatus(state, action: PayloadAction<{ ticks: string, requestStatus: RequestStatus }>) {
      const { ticks, requestStatus } = action.payload;
      state.symbolWiseHistories[ticks] = { ...state.symbolWiseHistories[ticks], ticksHistoryRequestStatus: requestStatus };
    },
    setTicksHistory(state, action: PayloadAction<{ ticks: string, ticksHistory: TicksHistory[] }>) {
      const { ticks, ticksHistory } = action.payload;
      state.symbolWiseHistories[ticks] = { ...state.symbolWiseHistories[ticks], ticksHistory: ticksHistory };
    },
    resetTickHistoryState(state) {
      state.symbolWiseHistories = {};
    },
  },
});

export default ticksHistorySlice;
