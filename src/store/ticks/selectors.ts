import { RootState } from "store/types";

export const selectTicks = (state: RootState) =>
  state.resources.ticks;