import { DerivResponseError, MessageType } from "api/derivWS/types";

export interface Tick {
  ask?: number;
  bid?: number;
  epoch?: number;
  id?: string;
  pip_size?: number;
  quote?: number;
  symbol?: string;
}

export interface Subscription {
  id: string;
}

export interface TicksStreamResponse {
  tick: Tick;
  echo_req: {
    [key: string]: string | number;
  };
  msg_type: MessageType,
  subscription: Subscription;
  error: DerivResponseError;
}