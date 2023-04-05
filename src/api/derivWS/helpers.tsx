import React from 'react';
import { notification } from "shared/helpers/notifications";
import { setActiveSymbols, setGetActiveSymbolsRequestStatus } from "store/symbols/actions";
import { resetTicksState } from "store/ticks/actions";
import { resetTickHistoryState, setGetTicksHistoryRequestStatus, setTicksHistory } from "store/ticksHistory/actions";
import { Text } from 'components/helpers'

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
      // const activeSymbols: ActiveSymbol[] = data.active_symbols;
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