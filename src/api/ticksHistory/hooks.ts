import React from "react";

import { derivApi, wsConnection } from "api/derivWS";
import { getTicksHistory } from 'api/ticksHistory'
import { useAppDispatch } from 'store/hooks';
import { setGetTicksHistoryRequestStatus, setTicksHistory } from "store/ticksHistory/actions";

import { TicksHistoryRequest } from "./types";
import { ChannelType, MessageType } from "api/derivWS/types";

// @ts-ignore
const handleTicksHistoryResponse = (dispatch: AppDispatch) => async (res) => {
  const data = JSON.parse(res.data);
  if (data.error !== undefined) {
    console.log("Error : ", data.error.message);
    wsConnection.removeEventListener(ChannelType.MESSAGE, handleTicksHistoryResponse, false);
    dispatch(setGetTicksHistoryRequestStatus({ ticks: data.echo_req.ticks_history, requestStatus: 'failed' }));
  }

  if (data.msg_type === MessageType.CANDLES) {
    dispatch(setTicksHistory({ ticks: data.echo_req.ticks_history, ticksHistory: data.candles }));
    dispatch(setGetTicksHistoryRequestStatus({ ticks: data.echo_req.ticks_history, requestStatus: 'done' }));
  }

  wsConnection.removeEventListener(ChannelType.MESSAGE, handleTicksHistoryResponse, false);
};

export const useGetTicksHistory = () => {
  const dispatch = useAppDispatch();
  return React.useCallback(
    (request: TicksHistoryRequest) => {
      dispatch(setGetTicksHistoryRequestStatus({ ticks: request.ticks_history, requestStatus: 'started' }));
      wsConnection.addEventListener(ChannelType.MESSAGE, handleTicksHistoryResponse(dispatch));
      getTicksHistory(request)
    },
    [],
  );
};