import DailyChangeCell from '../cells/DailyChangeCell';
import ImageAndTextCell from '../cells/ImageAndTextCell';
import LastPriceCell from '../cells/LastPriceCell';
import MiniChartCell from '../cells/MiniChartCell';
import TextCell from '../cells/TextCell';
import { Cells } from './types';

export const CELLS: Cells = {
  'text': TextCell,
  'image-and-text-cell': ImageAndTextCell,
  'last-price-cell': LastPriceCell,
  'daily-change-cell': DailyChangeCell,
  'mini-chart-cell': MiniChartCell,
};

export const DEFAULT_PAGE_SIZE = 10;
