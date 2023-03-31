import { derivApi } from "api/derivWS";


export const ticksStreamApi = (symbol: string | string[]) => {
  const tickSubscriber = () => derivApi.subscribe({ ticks: symbol,  subscribe: 1 });

  return {
    subscribeTicks: async () => {
      await tickSubscriber();
    },
    unsubscribeTicks: async () => {
      await tickSubscriber().unsubscribe();
    },
  }
}