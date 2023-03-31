import { Symbol } from 'api/symbols/types'
import { AssetCategory } from './types'

export const findAssetCategories = (
  symbols: Symbol[]
): AssetCategory[] => {
  return symbols.map((symbol) => ({
    id: symbol.market,
    name: symbol.market_display_name,
  })).filter(
    (thing, i, arr) => arr.findIndex(t => t.id === thing.id) === i
  );
};