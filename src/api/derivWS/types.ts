export type RequestStatus = 'done' | 'failed' | 'started' | 'initial';

export enum MessageType {
  TICK = 'tick',
  ACTIVE_SYMBOLS = 'active_symbols',
  CANDLES = 'candles',
}

export enum ChannelType {
  MESSAGE = 'message',
}

export interface DerivResponseError {
  message: string;
}
