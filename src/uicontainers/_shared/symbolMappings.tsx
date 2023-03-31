import React from 'react'
import {
    AUDCAD,
    AUDCHF,
    AUDBASKET,
    AUDJPY,
    AUDNZD,
    AUDUSD,
    AUS200,
    BOOM1000,
    BOOM500,
    BOOM300EU,
    BTCUSD,
    CRASH1000,
    CRASH500,
    CRASH300EU,
    ETHUSD,
    EUR50,
    EURAUD,
    EURCAD,
    EURCHF,
    EURGBP,
    EURBASKET,
    EURJPY,
    EURNZD,
    EURUSD,
    FRA40,
    GBPAUD,
    GBPCAD,
    GBPCHF,
    GBPBASKET,
    GBPJPY,
    GBPNZD,
    GBPUSD,
    GOLDUSD,
    GOLDBASKET,
    INDEX10,
    INDEX100,
    INDEX100S1,
    INDEX10S1,
    INDEX25,
    INDEX25S1,
    INDEX50,
    INDEX50S1,
    INDEX75,
    INDEX75S1,
    JP225,
    JUMP10NEW,
    JUMP25NEW,
    JUMP50NEW,
    JUMP75NEW,
    JUMP100NEW,
    MARKETBEARNEW,
    MARKETBULLNEW,
    NZDJPY,
    NZDUSD,
    PALLADIUMUSD,
    PLATINUMUSD,
    SILVERUSD,
    STEPINDICES,
    STOCKSHONGKONG50,
    STOCKSGERMANY30,
    STOCKSSWISS20,
    STOCKSUS500,
    STOCKSUSTECH100,
    STOCKSWALLSTREET30,
    UK100,
    USDCAD,
    USDCHF,
    USDMXN,
    USDNOK,
    USDPLN,
    USDSEK,
    USDBASKET,
    USDJPY,
    VINDEXIC200,
    VINDEXIC300,
    VINDEX1501S,
    VINDEX2501S,
} from 'components/symbols'
//
export const symbolMappings = [
    {
        name: 'Volatility 250 (1s) Index',
        display_name: 'Volatility 250 (1s) Index',
        icon: <img src={VINDEX2501S} alt="Volatility 250 (1s) Index" />,
        market: 'synthetic_index',
        symbol: 'VINDEX2501S',
    },
    {
        name: 'Volatility 150 (1s) Index',
        display_name: 'Volatility 150 (1s) Index',
        icon: <img src={VINDEX1501S} alt="Volatility 150 (1s) Index" />,
        market: 'synthetic_index',
        symbol: 'VINDEX1501S',
    },
    {
        name: 'Boom 1000 Index',
        display_name: 'Boom 1000 Index',
        icon: <img src={BOOM1000} alt="boom 100" />,
        market: 'synthetic_indices',
        symbol: 'BOOM1000',
    },
    {
        name: 'Boom 500 Index',
        display_name: 'Boom 500 Index',
        icon: <img src={BOOM500} alt="boom 500" />,
        market: 'synthetic_indices',
        symbol: 'BOOM500',
    },
    {
        name: 'Boom 300 Index',
        display_name: 'Boom 300 Index',
        icon: <img src={BOOM300EU} alt="boom 300" />,
        market: 'synthetic_indices',
        symbol: 'BOOM300N',
    },
    {
        name: 'Crash 1000 Index',
        display_name: 'Crash 1000 Index',
        icon: <img src={CRASH1000} alt="crash 1000" />,
        market: 'synthetic_indices',
        symbol: 'CRASH1000',
    },
    {
        name: 'Crash 500 Index',
        display_name: 'Crash 500 Index',
        icon: <img src={CRASH500} alt="crash 500" />,
        market: 'synthetic_indices',
        symbol: 'CRASH500',
    },
    {
        name: 'Crash 300 Index',
        display_name: 'Crash 300 Index',
        icon: <img src={CRASH300EU} alt="crash 300" />,
        market: 'synthetic_indices',
        symbol: 'CRASH300N',
    },
    {
        name: 'Step Index',
        display_name: 'Step Index',
        icon: <img src={STEPINDICES} alt="step index" />,
        market: 'synthetic_indices',
        symbol: 'stpRNG',
    },
    {
        name: 'Bear Market Index',
        display_name: 'Bear Market Index',
        icon: <img src={MARKETBEARNEW} alt="bear market index" />,
        market: 'synthetic_indices',
        symbol: 'RDBEAR',
    },
    {
        name: 'Bull Market Index',
        display_name: 'Bull Market Index',
        icon: <img src={MARKETBULLNEW} alt="bull market index" />,
        market: 'synthetic_indices',
        symbol: 'RDBULL',
    },
    {
        name: 'Volatility 10 (1s) Index',
        display_name: 'Volatility 10 (1s) Index',
        icon: <img src={INDEX10S1} alt="vol 10 1s" />,
        market: 'synthetic_indices',
        symbol: '1HZ10V',
    },
    {
        name: 'Volatility 10 Index',
        display_name: 'Volatility 10 Index',
        icon: <img src={INDEX10} alt="vol 10" />,
        market: 'synthetic_indices',
        symbol: 'R_10',
    },
    {
        name: 'Volatility 25 (1s) Index',
        display_name: 'Volatility 25 (1s) Index',
        icon: <img src={INDEX25S1} alt="vol 25 1s" />,
        market: 'synthetic_indices',
        symbol: '1HZ25V',
    },
    {
        name: 'Volatility 25 Index',
        display_name: 'Volatility 25 Index',
        icon: <img src={INDEX25} alt="Volatility 25" />,
        market: 'synthetic_indices',
        symbol: 'R_25',
    },
    {
        name: 'Volatility 50 (1s) Index',
        display_name: 'Volatility 50 (1s) Index',
        icon: <img src={INDEX50S1} alt="vol 50 1s" />,
        market: 'synthetic_indices',
        symbol: '1HZ50V',
    },
    {
        name: 'Volatility 50 Index',
        display_name: 'Volatility 50 Index',
        icon: <img src={INDEX50} alt="vol 50" />,
        market: 'synthetic_indices',
        symbol: 'R_50',
    },
    {
        name: 'Volatility 75 (1s) Index',
        display_name: 'Volatility 75 (1s) Index',
        icon: <img src={INDEX75S1} alt="vol 75 1s" />,
        market: 'synthetic_indices',
        symbol: '1HZ75V',
    },
    {
        name: 'Volatility 75 Index',
        display_name: 'Volatility 75 Index',
        icon: <img src={INDEX75} alt="vol 75" />,
        market: 'synthetic_indices',
        symbol: 'R_75',
    },
    {
        name: 'Volatility 100 (1s) Index',
        display_name: 'Volatility 100 (1s) Index',
        icon: <img src={INDEX100S1} alt="vol 100 1s" />,
        market: 'synthetic_indices',
        symbol: '1HZ100V',
    },
    {
        name: 'Volatility 100 Index',
        display_name: 'Volatility 100 Index',
        icon: <img src={INDEX100} alt="vol 100" />,
        market: 'synthetic_indices',
        symbol: 'R_100',
    },
    {
        name: 'Volatility 200 (1s) Index',
        display_name: 'Volatility 200 (1s) Index',
        icon: <img src={VINDEXIC200} alt="vol 200 1s" />,
        market: 'synthetic_indices',
        symbol: '1HZ200V',
    },
    {
        name: 'Volatility 300 (1s) Index',
        display_name: 'Volatility 300 (1s) Index',
        icon: <img src={VINDEXIC300} alt="vol 300 1s" />,
        market: 'synthetic_indices',
        symbol: '1HZ300V',
    },
    {
        name: 'Jump 10 Index',
        display_name: 'Jump 10 Index',
        icon: <img src={JUMP10NEW} alt="jump 10" />,
        market: 'synthetic_indices',
        symbol: 'JD10',
    },
    {
        name: 'Jump 25 Index',
        display_name: 'Jump 25 Index',
        icon: <img src={JUMP25NEW} alt="jump 25" />,
        market: 'synthetic_indices',
        symbol: 'JD25',
    },
    {
        name: 'Jump 50 Index',
        display_name: 'Jump 50 Index',
        icon: <img src={JUMP50NEW} alt="jump 50" />,
        market: 'synthetic_indices',
        symbol: 'JD50',
    },
    {
        name: 'Jump 75 Index',
        display_name: 'Jump 75 Index',
        icon: <img src={JUMP75NEW} alt="jump 75" />,
        market: 'synthetic_indices',
        symbol: 'JD75',
    },
    {
        name: 'Jump 100 Index',
        display_name: 'Jump 100 Index',
        icon: <img src={JUMP100NEW} alt="jump 100" />,
        market: 'synthetic_indices',
        symbol: 'JD100',
    },
    {
        name: 'AUS200',
        display_name: 'Australian Index',
        icon: <img src={AUS200} alt="australia 200" />,
        market: 'other',
        symbol: 'OTC_AS51',
    },
    {
        name: 'HK50',
        display_name: 'Hong Kong Index',
        icon: <img src={STOCKSHONGKONG50} alt="hong kong 50" />,
        market: 'other',
        symbol: 'OTC_HSI',
    },
    {
        name: 'JP225',
        display_name: 'Japanese Index',
        icon: <img src={JP225} alt="japan 225" />,
        market: 'other',
        symbol: 'OTC_N225',
    },
    {
        name: 'EUR50',
        display_name: 'Euro 50 Index',
        icon: <img src={EUR50} alt="europe 50" />,
        market: 'other',
        symbol: 'OTC_SX5E',
    },
    {
        name: 'FRA40',
        display_name: 'French Index',
        icon: <img src={FRA40} alt="france 40" />,
        market: 'other',
        symbol: 'OTC_FCHI',
    },
    {
        name: 'GER30',
        display_name: 'German Index',
        icon: <img src={STOCKSGERMANY30} alt="german 30" />,
        market: 'other',
        symbol: 'OTC_GDAXI',
    },
    {
        name: 'SWISS20',
        display_name: 'Swiss Index',
        icon: <img src={STOCKSSWISS20} alt="swiss 20" />,
        market: 'other',
        symbol: 'OTC_SSMI',
    },
    {
        name: 'UK100',
        display_name: 'UK Index',
        icon: <img src={UK100} alt="uk 100" />,
        market: 'other',
        symbol: 'OTC_FTSE',
    },
    {
        name: 'USINDEX',
        display_name: 'US Index',
        icon: <img src={STOCKSUS500} alt="us 500" />,
        market: 'other',
        symbol: 'OTC_SPC',
    },
    {
        name: 'USTECHINDEX',
        display_name: 'US Tech Index',
        icon: <img src={STOCKSUSTECH100} alt="us tech 100" />,
        market: 'other',
        symbol: 'OTC_NDX',
    },
    {
        name: 'STOCKSWALLSTREET30',
        display_name: 'Wall Street 30 Index',
        icon: <img src={STOCKSWALLSTREET30} alt="wall street 30" />,
        market: 'other',
        symbol: 'OTC_DJI',
    },
    {
        name: 'BTCUSD',
        display_name: 'BTC/USD',
        icon: <img src={BTCUSD} alt="btc usd" />,
        market: 'crypto',
        symbol: 'cryBTCUSD',
    },
    {
        name: 'ETHUSD',
        display_name: 'ETH/USD',
        icon: <img src={ETHUSD} alt="eth usd" />,
        market: 'crypto',
        symbol: 'cryETHUSD',
    },
    {
        name: 'AUDJPY',
        display_name: 'AUD/JPY',
        icon: <img src={AUDJPY} alt="aud jpy" />,
        market: 'forex',
        symbol: 'frxAUDJPY',
    },
    {
        name: 'AUDCAD',
        display_name: 'AUD/CAD',
        icon: <img src={AUDCAD} alt="aud cad" />,
        market: 'forex',
        symbol: 'frxAUDCAD',
    },
    {
        name: 'AUDCHF',
        display_name: 'AUD/CHF',
        icon: <img src={AUDCHF} alt="aud chf" />,
        market: 'forex',
        symbol: 'frxAUDCHF',
    },
    {
        name: 'AUDNZD',
        display_name: 'AUD/NZD',
        icon: <img src={AUDNZD} alt="aud nzd" />,
        market: 'forex',
        symbol: 'frxAUDNZD',
    },
    {
        name: 'AUDUSD',
        display_name: 'AUD/USD',
        icon: <img src={AUDUSD} alt="aud usd" />,
        market: 'forex',
        symbol: 'frxAUDUSD',
    },
    {
        name: 'EURAUD',
        display_name: 'EUR/AUD',
        icon: <img src={EURAUD} alt="eur aud" />,
        market: 'forex',
        symbol: 'frxEURAUD',
    },
    {
        name: 'EURCAD',
        display_name: 'EUR/CAD',
        icon: <img src={EURCAD} alt="eur cad" />,
        market: 'forex',
        symbol: 'frxEURCAD',
    },
    {
        name: 'EURCHF',
        display_name: 'EUR/CHF',
        icon: <img src={EURCHF} alt="eur chf" />,
        market: 'forex',
        symbol: 'frxEURCHF',
    },
    {
        name: 'EURGBP',
        display_name: 'EUR/GBP',
        icon: <img src={EURGBP} alt="eur gbp" />,
        market: 'forex',
        symbol: 'frxEURGBP',
    },
    {
        name: 'EURJPY',
        display_name: 'EUR/JPY',
        icon: <img src={EURJPY} alt="eur jpy" />,
        market: 'forex',
        symbol: 'frxEURJPY',
    },
    {
        name: 'EURNZD',
        display_name: 'EUR/NZD',
        icon: <img src={EURNZD} alt="eur nzd" />,
        market: 'forex',
        symbol: 'frxEURNZD',
    },
    {
        name: 'EURUSD',
        display_name: 'EUR/USD',
        icon: <img src={EURUSD} alt="eur usd" />,
        market: 'forex',
        symbol: 'frxEURUSD',
    },
    {
        name: 'GBPCHF',
        display_name: 'GBP/CHF',
        icon: <img src={GBPCHF} alt="gbp chf" />,
        market: 'forex',
        symbol: 'frxGBPCHF',
    },
    {
        name: 'GBPJPY',
        display_name: 'GBP/JPY',
        icon: <img src={GBPJPY} alt="gbp jpy" />,
        market: 'forex',
        symbol: 'frxGBPJPY',
    },
    {
        name: 'GBPUSD',
        display_name: 'GBP/USD',
        icon: <img src={GBPUSD} alt="gbp usd" />,
        market: 'forex',
        symbol: 'frxGBPUSD',
    },
    {
        name: 'NZDUSD',
        display_name: 'NZD/USD',
        icon: <img src={NZDUSD} alt="nzd usd" />,
        market: 'forex',
        symbol: 'frxNZDUSD',
    },
    {
        name: 'USDCAD',
        display_name: 'USD/CAD',
        icon: <img src={USDCAD} alt="usd cad" />,
        market: 'forex',
        symbol: 'frxUSDCAD',
    },
    {
        name: 'USDCHF',
        display_name: 'USD/CHF',
        icon: <img src={USDCHF} alt="usd chf" />,
        market: 'forex',
        symbol: 'frxUSDCHF',
    },
    {
        name: 'USDJPY',
        display_name: 'USD/JPY',
        icon: <img src={USDJPY} alt="usd jpy" />,
        market: 'forex',
        symbol: 'frxUSDJPY',
    },
    {
        name: 'USDMXN',
        display_name: 'USD/MXN',
        icon: <img src={USDMXN} alt="usd mxn" />,
        market: 'forex',
        symbol: 'frxUSDMXN',
    },
    {
        name: 'USDNOK',
        display_name: 'USD/NOK',
        icon: <img src={USDNOK} alt="usd nok" />,
        market: 'forex',
        symbol: 'frxUSDNOK',
    },
    {
        name: 'USDPLN',
        display_name: 'USD/PLN',
        icon: <img src={USDPLN} alt="usd pln" />,
        market: 'forex',
        symbol: 'frxUSDPLN',
    },
    {
        name: 'USDSEK',
        display_name: 'USD/SEK',
        icon: <img src={USDSEK} alt="usd sek" />,
        market: 'forex',
        symbol: 'frxUSDSEK',
    },
    {
        name: 'GBPAUD',
        display_name: 'GBP/AUD',
        icon: <img src={GBPAUD} alt="gbp aud" />,
        market: 'forex',
        symbol: 'frxGBPAUD',
    },
    {
        name: 'GBPCAD',
        display_name: 'GBP/CAD',
        icon: <img src={GBPCAD} alt="gbp cad" />,
        market: 'forex',
        symbol: 'frxGBPCAD',
    },
    {
        name: 'GBPNZD',
        display_name: 'GBP/NZD',
        icon: <img src={GBPNZD} alt="gbp nzd" />,
        market: 'forex',
        symbol: 'frxGBPNZD',
    },
    {
        name: 'NZDJPY',
        display_name: 'NZD/JPY',
        icon: <img src={NZDJPY} alt="nzd jpy" />,
        market: 'forex',
        symbol: 'frxNZDJPY',
    },
    {
        name: 'XAUUSD',
        display_name: 'Gold/USD',
        icon: <img src={GOLDUSD} alt="gold usd" />,
        market: 'commodities',
        symbol: 'OTC_HSI',
    },
    {
        name: 'XAGUSD',
        display_name: 'Silver/USD',
        icon: <img src={SILVERUSD} alt="silver usd" />,
        market: 'commodities',
        symbol: 'frxXAGUSD',
    },
    {
        name: 'XPDUSD',
        display_name: 'Palladium/USD',
        icon: <img src={PALLADIUMUSD} alt="palladium usd" />,
        market: 'commodities',
        symbol: 'frxXPDUSD',
    },
    {
        name: 'XPTUSD',
        display_name: 'Platinum/USD',
        icon: <img src={PLATINUMUSD} alt="platinum usd" />,
        market: 'commodities',
        symbol: 'frxXPTUSD',
    },
    {
        name: 'AUDBASKET',
        display_name: 'AUD Basket',
        icon: <img src={AUDBASKET} alt="aud basket" />,
        market: 'basket_indices',
        symbol: 'WLDAUD',
    },
    {
        name: 'GBPBASKET',
        display_name: 'GBP Basket',
        icon: <img src={GBPBASKET} alt="gbp basket" />,
        market: 'basket_indices',
        symbol: 'WLDGBP',
    },
    {
        name: 'EURBASKET',
        display_name: 'EUR Basket',
        icon: <img src={EURBASKET} alt="eur basket" />,
        market: 'basket_indices',
        symbol: 'WLDEUR',
    },
    {
        name: 'USDBASKET',
        display_name: 'USD Basket',
        icon: <img src={USDBASKET} alt="usd basket" />,
        market: 'basket_indices',
        symbol: 'WLDUSD',
    },
    {
        name: 'GOLDBASKET',
        display_name: 'Gold Basket',
        icon: <img src={GOLDBASKET} alt="gold basket" />,
        market: 'basket_indices',
        symbol: 'WLDXAU',
    },
]
