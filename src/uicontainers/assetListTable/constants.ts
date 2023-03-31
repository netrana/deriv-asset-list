import { Column } from 'components/tables/XTable/types';

export const COLUMNS: Column[] = [
  {
    name: 'Name',
    key: 'name',
    type: 'image-and-text-cell',
    width: '25%',
  },
  {
    name: 'Last price',
    key: 'last_price',
    type: 'last-price-cell',
    width: '25%',
  },
  // {
  //   name: '24h change',
  //   key: 'daily_change',
  //   type: 'daily-change-cell',
  //   width: '25%',
  // },
  // {
  //   name: '',
  //   key: 'mini_chart',
  //   type: 'mini-chart-cell',
  //   width: '25%',
  // },
];
