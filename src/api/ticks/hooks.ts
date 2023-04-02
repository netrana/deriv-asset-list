import React, { useRef } from "react";

import { derivApi } from "api/derivWS";
import { useAppDispatch } from 'store/hooks';
import { setGetTicksRequestStatus, setTicks } from 'store/ticks/actions';

export const useTicksStream = (symbol: string) => {
  const dispatch = useAppDispatch();
  const tick_subscription = useRef();
  const tickSubscriber = derivApi.subscribe({ ticks: symbol, subscribe: 1 });

  // @ts-ignore
  const handleTicksResponse = (data) => {
    if (data) {
      if (data.msg_type === "tick") {
        dispatch(setTicks({ symbol: data.echo_req.ticks, tick: data.tick }));
        dispatch(setGetTicksRequestStatus({ symbol: data.echo_req.ticks, requestStatus: 'done' }));
      }
    }
  };
  React.useEffect(() => {
    dispatch(setGetTicksRequestStatus({ symbol: symbol, requestStatus: 'started' }));
    tick_subscription.current = tickSubscriber.subscribe(handleTicksResponse);

    return () => {
      if (tick_subscription.current) {
        // @ts-ignore
        tick_subscription.current.unsubscribe();
        tick_subscription.current = undefined;
      }
    }
  }, []);
};