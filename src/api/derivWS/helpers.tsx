import React from 'react';
import { notification } from "shared/helpers/notifications";
import { setActiveSymbols, setGetActiveSymbolsRequestStatus } from "store/symbols/actions";
import { resetTicksState } from "store/ticks/actions";
import { resetTickHistoryState, setGetTicksHistoryRequestStatus, setTicksHistory } from "store/ticksHistory/actions";
import { Text } from 'components/helpers';

import { derivApi, wsConnection } from '.';
import { ChannelType, MessageType } from "./types";

// @ts-ignore
export const handleWsResponse = (dispatch) => async (res) => {
  const data = JSON.parse(res.data);
  if (data.error !== undefined) {
    if (!derivApi.isConnectionClosed()) {
      notification({
        title: "Error ocurred",
        description: <>Connection was closed because of the following error:<div><Text type="danger">{data.error.message}</Text></div>Please refresh the page to reconnect.</>,
        type: 'error',
      });
      dispatch(setGetActiveSymbolsRequestStatus('failed'));
      dispatch(resetTickHistoryState());
      dispatch(resetTicksState());
      await derivApi.disconnect();
    }
  } else {
    if (data.msg_type === MessageType.ACTIVE_SYMBOLS) {     
      dispatch(setActiveSymbols(data.active_symbols));
      dispatch(setGetActiveSymbolsRequestStatus('done'));

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      wsConnection.removeEventListener(ChannelType.MESSAGE, handleWsResponse(dispatch), false);
    }

    if (data.msg_type === MessageType.CANDLES) {
      dispatch(setTicksHistory({ ticks: data.echo_req.ticks_history, ticksHistory: data.candles }));
      dispatch(setGetTicksHistoryRequestStatus({ ticks: data.echo_req.ticks_history, requestStatus: 'done' }));

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      wsConnection.removeEventListener(ChannelType.MESSAGE, handleWsResponse(dispatch), false);
    }
  }
};