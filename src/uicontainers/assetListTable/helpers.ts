import { Symbol } from 'api/symbols/types'

import { AssetTableData } from './type';
import { symbolMappings } from 'uicontainers/_shared/symbolMappings';

export const findFilteredSymbols = (
  symbols: Symbol[],
  category: string,
  subCategory: string,
): Symbol[] => {
  return symbols
    .filter((symbol) => symbol.market === category && symbol.submarket === subCategory);
};

export const transformAssetsToTableData = (
  symbols: Symbol[]
): AssetTableData[] => {
  return symbols.map((symbol) => ({
    key: symbol.symbol,
    name: {
      text: symbol.display_name,
      image: symbolMappings.find((icon) => icon.symbol === symbol.symbol)?.icon || '',
    },
    last_price: {
      symbol: symbol.symbol,
    },
    // daily_change: {
    //   symbol: symbol.symbol,
    // },
    // mini_chart: {
    //   symbol: symbol.symbol,
    // }
  }));
};
