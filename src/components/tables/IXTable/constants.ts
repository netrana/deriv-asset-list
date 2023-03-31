import ActionButtonCell from '../cells/ActionButtonCell';
import DailyChangeCell from '../cells/DailyChangeCell';
import DateCell from '../cells/DateCell';
import DateTimeCell from '../cells/DateTimeCell';
import HealthCell from '../cells/HealthCell';
import IconLinkAndTextCell from '../cells/IconLinkAndTextCell/IconLinkAndTextCell';
import ImageAndTextCell from '../cells/ImageAndTextCell';
import LastPriceCell from '../cells/LastPriceCell';
import LinkCell from '../cells/LinkCell';
import MiniChartCell from '../cells/MiniChartCell';
import StarRatingCell from '../cells/StarRatingCell';
import TextCell from '../cells/TextCell';
import { Cells } from './types';

export const CELLS: Cells = {
  text: TextCell,
  health: HealthCell,
  'image-and-text-cell': ImageAndTextCell,
  'icon-link-and-text-cell': IconLinkAndTextCell,
  link: LinkCell,
  'action-button-cell': ActionButtonCell,
  date: DateCell,
  datetime: DateTimeCell,
  'star-rating': StarRatingCell,
  'last-price-cell': LastPriceCell,
  'daily-change-cell': DailyChangeCell,
  'mini-chart-cell': MiniChartCell,
};

export const DEFAULT_PAGE_SIZE = 10;
