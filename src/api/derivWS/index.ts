// @ts-ignore (As the type definition is missing for TS)
import DerivAPIBasic from "@deriv/deriv-api/dist/DerivAPIBasic";

const WSS_URL = process.env.REACT_APP_DERIV_WSS_URL;
const APP_ID = process.env.REACT_APP_DERIV_APP_ID;

export const wsConnection = new WebSocket(`${WSS_URL}${APP_ID}`);

export const derivApi = new DerivAPIBasic({ connection: wsConnection });