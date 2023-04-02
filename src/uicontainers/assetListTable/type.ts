import { Props as TextProps } from 'components/tables/cells/TextCell/types';
import { Props as LastPriceCellProps } from 'components/tables/cells/LastPriceCell/types';
import { Props as DailyChangeCellProps } from 'components/tables/cells/DailyChangeCell/types';
import { Props as MiniChartCellProps } from 'components/tables/cells/MiniChartCell/types';

export interface Asset {
  id: string;
  name: string;
  lastPrice: string;
  dailyChange: string;
}

export interface AssetTableData {
  key: string;
  name: TextProps;
  last_price: LastPriceCellProps;
  daily_change: DailyChangeCellProps;
  mini_chart: MiniChartCellProps;
}