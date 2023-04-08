import React from "react";

import { derivApi, wsConnection } from "api/derivWS";
import { handleWsResponse } from "api/derivWS/helpers";
import { ChannelType } from "api/derivWS/types";
import { getTicksHistory } from 'api/ticksHistory';
import { useAppDispatch } from 'store/hooks';
import { setGetTicksHistoryRequestStatus } from "store/ticksHistory/actions";

import { TicksHistoryRequest } from "./types";

export const useGetTicksHistory = () => {
  const dispatch = useAppDispatch();
  return React.useCallback(
    (request: TicksHistoryRequest) => {
      if (!derivApi.isConnectionClosed()) {
        dispatch(setGetTicksHistoryRequestStatus({ ticks: request.ticks_history, requestStatus: 'started' }));
        wsConnection.addEventListener(ChannelType.MESSAGE, handleWsResponse(dispatch));
        getTicksHistory(request);
      }
    },
    [],
  );
};