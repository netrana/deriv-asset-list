import { RequestStatus } from "api/derivWS/types";

export interface AssetCategory {
  id: string;
  name: string;
}

export interface AssetSubCategory {
  id: string;
  name: string;
}

export interface Tick {
  ask?: number;
  bid?: number;
  epoch?: number;
  id?: string;
  pip_size?: number;
  quote?: number;
  symbol: string;
  errorMessage?: string;
}

export interface TicksState {
  symbolWiseTicks: {
    [symbol: string]: {
      tick: Tick
      getTicksRequestStatus: RequestStatus;
    }
  }
}
