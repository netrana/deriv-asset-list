import { RootState } from "store/types";

export const selectActiveSymbols = (state: RootState) =>
  state.resources.activeSymbols.activeSymbols;
  
export const selectGetSymbolRequestStatus = (state: RootState) =>
  state.resources.activeSymbols.getActiveSymbolsRequestStatus;