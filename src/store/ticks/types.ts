import { RequestStatus } from "api/derivWS/types";
import { Tick } from "api/ticks/types";

export interface AssetCategory {
  id: string;
  name: string;
}

export interface AssetSubCategory {
  id: string;
  name: string;
}

export interface TicksState {
  symbolWiseTicks: {
    [symbol: string]: {
      tick: Tick
      getTicksRequestStatus: RequestStatus;
    }
  }
}
