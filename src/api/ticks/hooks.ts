import React from "react";

import { derivApi, wsConnection } from "api/derivWS";
import { ticksStreamApi } from 'api/ticks'
import { useAppDispatch } from 'store/hooks';
import { setGetTicksRequestStatus, setTicks } from 'store/ticks/actions';

const handleTicksResponse = (dispatch) => async (res) => {
  const data = JSON.parse(res.data);
  if (data.error !== undefined) {
    console.log(data.error.message);
    wsConnection.removeEventListener("message", handleTicksResponse, false);
    await derivApi.disconnect();
    dispatch(setGetTicksRequestStatus({ symbol: data.echo_req.ticks, requestStatus: 'failed' }));
  }

  if (data.msg_type === "tick") {
    dispatch(setTicks({ symbol: data.echo_req.ticks, tick: data.tick }));
    dispatch(setGetTicksRequestStatus({ symbol: data.echo_req.ticks, requestStatus: 'done' }));
  }
};

export const useSubscribeTicks = () => {
  const dispatch = useAppDispatch();
  return React.useCallback(
    (symbol: string) => {
      dispatch(setGetTicksRequestStatus({ symbol: symbol, requestStatus: 'started' }));
      const tickApi = ticksStreamApi(symbol);
      wsConnection.addEventListener("message", handleTicksResponse(dispatch));
      tickApi.subscribeTicks();
      return tickApi;
    },
    [],
  );
};