import React from "react";

import { derivApi, wsConnection } from "api/derivWS";
import { getActiveSymbols } from 'api/symbols'
import { useAppDispatch } from 'store/hooks';
import { setActiveSymbols, setGetActiveSymbolsRequestStatus } from "store/symbols/actions";
import { notification } from "shared/helpers/notifications";
import { ActiveSymbol } from "./types";
import { ChannelType } from "api/derivWS/types";

// @ts-ignore
const handleActiveSymbolsResponse = (dispatch) => async (res) => {
  const data = JSON.parse(res.data);
  if (data.error !== undefined) {
    notification({
      title: "Error ocurred",
      description: data.error.message,
      type: 'error',
    })
    wsConnection.removeEventListener(ChannelType.MESSAGE, handleActiveSymbolsResponse, false);
    await derivApi.disconnect();
    dispatch(setGetActiveSymbolsRequestStatus('failed'));
  }

  if (data.msg_type === "active_symbols") {
    const activeSymbols: ActiveSymbol[] = data.active_symbols;
    // const modifiedSymbols = [
    //   {
    //     "allow_forward_starting": 0,
    //     "delay_amount": 0,
    //     "display_name": "AUD Basket",
    //     "display_order": 24,
    //     "exchange_is_open": 0,
    //     "exchange_name": "FOREX",
    //     "intraday_interval_minutes": 5,
    //     "is_trading_suspended": 0,
    //     "market": "synthetic_index",
    //     "market_display_name": "Derived",
    //     "pip": 0.001,
    //     "quoted_currency_symbol": "WLDAUD",
    //     "spot": 882.013,
    //     "spot_age": "43476",
    //     "spot_percentage_change": "-0.30",
    //     "spot_time": "1680296100",
    //     "subgroup": "baskets",
    //     "subgroup_display_name": "Baskets",
    //     "submarket": "forex_basket",
    //     "submarket_display_name": "Forex Basket",
    //     "symbol": "R_10",
    //     "symbol_type": "forex_basket"
    //   },
    //   {
    //     "allow_forward_starting": 1,
    //     "delay_amount": 0,
    //     "display_name": "AUD/CAD",
    //     "display_order": 2,
    //     "exchange_is_open": 0,
    //     "exchange_name": "FOREX",
    //     "intraday_interval_minutes": 5,
    //     "is_trading_suspended": 0,
    //     "market": "forex",
    //     "market_display_name": "Forex",
    //     "pip": 0.00001,
    //     "quoted_currency_symbol": "CAD",
    //     "spot": 0.90358,
    //     "spot_age": "43476",
    //     "spot_percentage_change": "-0.50",
    //     "spot_time": "1680296100",
    //     "subgroup": "none",
    //     "subgroup_display_name": "None",
    //     "submarket": "minor_pairs",
    //     "submarket_display_name": "Minor Pairs",
    //     "symbol": "R_25",
    //     "symbol_type": "forex"
    //   },
    //   {
    //     "allow_forward_starting": 1,
    //     "delay_amount": 0,
    //     "display_name": "AUD/CHF",
    //     "display_order": 17,
    //     "exchange_is_open": 0,
    //     "exchange_name": "FOREX",
    //     "intraday_interval_minutes": 5,
    //     "is_trading_suspended": 0,
    //     "market": "forex",
    //     "market_display_name": "Forex",
    //     "pip": 0.00001,
    //     "quoted_currency_symbol": "CHF",
    //     "spot": 0.61197,
    //     "spot_age": "43476",
    //     "spot_percentage_change": "-0.24",
    //     "spot_time": "1680296100",
    //     "subgroup": "none",
    //     "subgroup_display_name": "None",
    //     "submarket": "minor_pairs",
    //     "submarket_display_name": "Minor Pairs",
    //     "symbol": "R_50",
    //     "symbol_type": "forex"
    //   },
    //   {
    //     "allow_forward_starting": 1,
    //     "delay_amount": 0,
    //     "display_name": "AUD/JPY",
    //     "display_order": 1,
    //     "exchange_is_open": 0,
    //     "exchange_name": "FOREX",
    //     "intraday_interval_minutes": 5,
    //     "is_trading_suspended": 0,
    //     "market": "forex",
    //     "market_display_name": "Forex",
    //     "pip": 0.001,
    //     "quoted_currency_symbol": "JPY",
    //     "spot": 88.804,
    //     "spot_age": "43476",
    //     "spot_percentage_change": "-0.72",
    //     "spot_time": "1680296100",
    //     "subgroup": "none",
    //     "subgroup_display_name": "None",
    //     "submarket": "major_pairs",
    //     "submarket_display_name": "Major Pairs",
    //     "symbol": "R_75",
    //     "symbol_type": "forex"
    //   },
    //   {
    //     "allow_forward_starting": 1,
    //     "delay_amount": 0,
    //     "display_name": "France 40",
    //     "display_order": 9,
    //     "exchange_is_open": 0,
    //     "exchange_name": "EURONEXT_OTC",
    //     "intraday_interval_minutes": 5,
    //     "is_trading_suspended": 0,
    //     "market": "indices",
    //     "market_display_name": "Stock Indices",
    //     "pip": 0.01,
    //     "quoted_currency_symbol": "EUR",
    //     "spot": 7337.5,
    //     "spot_age": "48577",
    //     "spot_percentage_change": "0.96",
    //     "spot_time": "1680290999",
    //     "subgroup": "none",
    //     "subgroup_display_name": "None",
    //     "submarket": "europe_OTC",
    //     "submarket_display_name": "European indices",
    //     "symbol": "R_100",
    //     "symbol_type": "stockindex"
    //   },
    // ];
    // dispatch(setActiveSymbols(modifiedSymbols));
    dispatch(setActiveSymbols(data.active_symbols));
    dispatch(setGetActiveSymbolsRequestStatus('done'));
  }

  wsConnection.removeEventListener(ChannelType.MESSAGE, handleActiveSymbolsResponse, false);
};

export const useGetActiveSymbols = () => {
  const dispatch = useAppDispatch();
  return React.useCallback(
    () => {
      dispatch(setGetActiveSymbolsRequestStatus('started'));
      wsConnection.addEventListener(ChannelType.MESSAGE, handleActiveSymbolsResponse(dispatch));
      getActiveSymbols()
    },
    [],
  );
};