import { RootState } from "store/types";

export const selectTicksHistory = (state: RootState) =>
  state.resources.ticksHistory.symbolWiseHistories;