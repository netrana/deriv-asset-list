import React from "react";

import { derivApi, wsConnection } from "api/derivWS";
import { getActiveSymbols } from 'api/symbols'
import { useAppDispatch } from 'store/hooks';
import { setActiveSymbols, setGetActiveSymbolsRequestStatus } from "store/symbols/actions";
import { notification } from "shared/helpers/notifications";
import { Symbol } from 'api/symbols/types'

const handleActiveSymbolsResponse = (dispatch) => async (res) => {
  const data = JSON.parse(res.data);
  if (data.error !== undefined) {
    notification({
      title: "Error ocurred",
      description: data.error.message,
      type: 'error',
    })
    wsConnection.removeEventListener("message", handleActiveSymbolsResponse, false);
    await derivApi.disconnect();
    dispatch(setGetActiveSymbolsRequestStatus('failed'));
  }

  if (data.msg_type === "active_symbols") {
    // const activeSymbols: Symbol[] = data.active_symbols;
    // const modifiedSymbols = activeSymbols.map((item) => {
    //   return {
    //     ...item,
    //     symbol: 'R_50',
    //   }
    // })[0];
    // dispatch(setActiveSymbols([modifiedSymbols]));
    dispatch(setActiveSymbols(data.active_symbols));
    dispatch(setGetActiveSymbolsRequestStatus('done'));
  }

  wsConnection.removeEventListener("message", handleActiveSymbolsResponse, false);
};

export const useGetActiveSymbols = () => {
  const dispatch = useAppDispatch();
  return React.useCallback(
    () => {
      dispatch(setGetActiveSymbolsRequestStatus('started'));
      wsConnection.addEventListener("message", handleActiveSymbolsResponse(dispatch));
      getActiveSymbols()
    },
    [],
  );
};