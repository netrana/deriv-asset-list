import { createAsyncThunk } from '@reduxjs/toolkit';

// import { subscribeTicks } from 'api/ticks';

export const subscribeTicksAsync = createAsyncThunk(
  'subscribe/ticks',
  async () => {
    // const response = await subscribeTicks('R_50');
    return 0;
  },
);
