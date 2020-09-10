import { Currency } from 'store';

type CurrencyBEFormat = {
  Cur_ID: number;
  Cur_OfficialRate: number;
  Date: string;
};

export const mapRates = (rates: CurrencyBEFormat[]): Currency[] =>
  rates.map(({ Cur_OfficialRate, Date }) => ({
    value: Cur_OfficialRate,
    date: Date,
  }));
