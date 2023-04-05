import React, { useRef } from "react";

import { derivApi } from "api/derivWS";
import { useAppDispatch } from 'store/hooks';
import { setGetTicksRequestStatus, setTicks } from 'store/ticks/actions';
import { TicksStreamResponse } from "./types";
import { MessageType } from "api/derivWS/types";

export const useTicksStream = (symbol: string) => {
  const dispatch = useAppDispatch();
  const tick_subscription = useRef();
  const tickSubscriber = derivApi.subscribe({ ticks: symbol, subscribe: 1 });

  const handleTicksResponse = (data: TicksStreamResponse) => {
    if (data) {
      if (data.msg_type === MessageType.TICK) {
        if (data.error) {
          dispatch(setTicks({ symbol: data.echo_req.ticks.toString(), tick: { quote: 0 } }));
          dispatch(setGetTicksRequestStatus({ symbol: data.echo_req.ticks.toString(), requestStatus: 'failed' }));
        } else {
          dispatch(setTicks({ symbol: data.echo_req.ticks.toString(), tick: data.tick }));
          dispatch(setGetTicksRequestStatus({ symbol: data.echo_req.ticks.toString(), requestStatus: 'done' }));
        }
      }
    }
  };

  React.useEffect(() => {
    if (!derivApi.isConnectionClosed()) {
      dispatch(setGetTicksRequestStatus({ symbol: symbol, requestStatus: 'started' }));
      tick_subscription.current = tickSubscriber.subscribe(handleTicksResponse);

      return () => {
        if (tick_subscription.current) {
          // @ts-ignore
          tick_subscription.current.unsubscribe();
          tick_subscription.current = undefined;
        }
      }
    }
  }, [symbol]);
};