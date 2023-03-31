export enum TickHistoryStyle {
  CANDLES = 'candles',
  TICKS = 'ticks',
}

export interface TicksHistoryRequest {
  ticks_history: string;
  adjust_start_time: number;
  count?: number;
  end: string;
  start: number;
  style: TickHistoryStyle;
  granularity?: number;
}