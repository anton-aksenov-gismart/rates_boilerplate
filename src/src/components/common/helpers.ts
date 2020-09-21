import moment from "moment";
import {
  CurrencyKeys,
  baseUrlRates,
  currencyIdBase,
  dateFormat,
} from "./config";

const getDatesToDisplay = (
  daysCount: number,
  format: string
): [string, string] => {
  const startDate = moment().subtract(daysCount, "d").format(format);
  const endDate = moment().format(format);
  return [startDate, endDate];
};

export const createRatesUrl = (currencyId: string = currencyIdBase): string => {
  // get 6 days (1 week) before current date
  const [startDate, endDate] = getDatesToDisplay(6, dateFormat);
  return `${baseUrlRates}/${currencyId}?startDate=${startDate}&endDate=${endDate}`;
};

export const getCurrenciesArr = (
  currencyToDisplay,
  currencies
): Array<object> => {
  if (!currencies.length) return [];
  return currencyToDisplay.map((name) => {
    return currencies.find((currency) => {
      const isCurrentDate = moment() < moment(currency[CurrencyKeys.dateEnd]);
      return isCurrentDate && currency[CurrencyKeys.abbr] === name;
    });
  });
};
