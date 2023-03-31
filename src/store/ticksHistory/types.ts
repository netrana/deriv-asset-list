import { RequestStatus } from "api/derivWS/types";

export interface TicksHistory {
  close: number;
  epoch: number;
  high: number;
  low: number;
  open: number;
}

export interface TicksHistoryState {
  symbolWiseHistories: {
    [symbol: string]: {
      ticksHistory: TicksHistory[],
      ticksHistoryRequestStatus: RequestStatus
    }
  }
}
