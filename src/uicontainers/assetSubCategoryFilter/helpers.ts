import { ActiveSymbol } from 'api/symbols/types';
import { AssetSubCategory } from './types';

export const findAssetSubCategories = (
  symbols: ActiveSymbol[],
  category: string,
): AssetSubCategory[] => {
  return symbols
    .filter((symbol) => symbol.market === category)
    .map((symbol) => ({
      label: symbol.submarket_display_name,
      value: symbol.submarket,
    })).filter(
      (thing, i, arr) => arr.findIndex(t => t.value === thing.value) === i
    );
};