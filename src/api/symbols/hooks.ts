import React from "react";

import { derivApi, wsConnection } from "api/derivWS";
import { handleWsResponse } from "api/derivWS/helpers";
import { ChannelType } from "api/derivWS/types";
import { getActiveSymbols } from 'api/symbols';
import { useAppDispatch } from 'store/hooks';
import { setGetActiveSymbolsRequestStatus } from "store/symbols/actions";

export const useGetActiveSymbols = () => {
  const dispatch = useAppDispatch();
  return React.useCallback(
    () => {
      if (!derivApi.isConnectionClosed()) {
        dispatch(setGetActiveSymbolsRequestStatus('started'));
        wsConnection.addEventListener(ChannelType.MESSAGE, handleWsResponse(dispatch));
        getActiveSymbols();
      }
    },
    [],
  );
};