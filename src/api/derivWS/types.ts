export type RequestStatus = 'done' | 'failed' | 'started' | 'initial';

export enum MessageType {
  TICK = 'tick',
  ACTIVE_SYMBOLS = 'active_symbols',
}
