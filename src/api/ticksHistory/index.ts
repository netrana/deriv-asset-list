import { derivApi } from "api/derivWS";
import { TicksHistoryRequest } from "./types";

export const getTicksHistory = async (ticks_history_request: TicksHistoryRequest) => {
  await derivApi.ticksHistory(ticks_history_request);
};