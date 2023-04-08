import { ActiveSymbol } from 'api/symbols/types';

import { AssetTableData } from './type';
import { symbolMappings } from 'uicontainers/_shared/symbolMappings';

export const findFilteredSymbols = (
  symbols: ActiveSymbol[],
  category: string,
  subCategory: string,
): ActiveSymbol[] => {
  return symbols
    .filter((symbol) => symbol.market === category && symbol.submarket === subCategory);
};

export const transformAssetsToTableData = (
  symbols: ActiveSymbol[]
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
    daily_change: {
      symbol: symbol.symbol,
    },
    mini_chart: {
      symbol: symbol.symbol,
    }
  }));
};
