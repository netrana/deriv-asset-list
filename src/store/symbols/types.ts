import { RequestStatus } from "api/derivWS/types";
import { ActiveSymbol } from 'api/symbols/types';

export interface AssetCategory {
  id: string;
  name: string;
}

export interface AssetSubCategory {
  id: string;
  name: string;
}

export interface SymbolsState {
  activeSymbols: ActiveSymbol[];
  getActiveSymbolsRequestStatus: RequestStatus;
}
