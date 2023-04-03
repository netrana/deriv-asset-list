import { DerivResponseError, MessageType } from "api/derivWS/types";

export interface ActiveSymbol {
  display_name: string;
  market: string;
  market_display_name: string;
  submarket: string;
  submarket_display_name: string;
  symbol: string;
  symbol_type: string;
}



export interface ActiveSymbolResponse {
  active_symbols: ActiveSymbol[];
  echo_req: {
    [key: string]: string | number;
  };
  msg_type: MessageType,
  error:DerivResponseError;
}