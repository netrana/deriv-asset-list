import { derivApi } from "api/derivWS";

export const getActiveSymbols = async () => {
  await derivApi.activeSymbols({
    active_symbols: "brief",
    product_type: "basic"
  });
};