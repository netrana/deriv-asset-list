// @ts-ignore
import DerivAPIBasic from "@deriv/deriv-api/dist/DerivAPIBasic";

import { APP_ID } from "./constants";

export const wsConnection = new WebSocket(
  `wss://ws.binaryws.com/websockets/v3?app_id=${APP_ID}`
);

export const derivApi = new DerivAPIBasic({ connection: wsConnection });

export const disconnect = async () => {
  await derivApi.disconnect();
}