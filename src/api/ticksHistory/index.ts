import { derivApi } from "api/derivWS";
import { TicksHistoryRequest } from "./types";

export const getTicksHistory = (ticks_history_request: TicksHistoryRequest) => {
  derivApi.ticksHistory(ticks_history_request);
};