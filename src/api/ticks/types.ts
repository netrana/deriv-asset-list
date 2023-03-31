export interface Symbol {
  display_name: string;
  market: string;
  market_display_name: string;
  submarket: string;
  submarket_display_name: string;
  symbol: string;
  symbol_type: string;
}

export interface GetActiveSymbolsResponse {
  active_symbols: Symbol[];
}

export interface GetActiveSymbols {
  (): Promise<GetActiveSymbolsResponse>;
}