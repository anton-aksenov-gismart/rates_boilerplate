export const currencyToDisplay: Array<string> = ["USD", "EUR", "RUB"];
export const currenciesUrl = "https://www.nbrb.by/api/exrates/currencies";
export const baseUrlRates = "https://www.nbrb.by/API/ExRates/Rates/Dynamics";
export const currencyIdBase = "145";
export const dateFormat = "YYYY-M-D";

export const enum CurrencyKeys {
  id = "Cur_ID",
  rate = "Cur_OfficialRate",
  date = "Date",
  abbr = "Cur_Abbreviation",
  name = "Cur_Name",
  dateEnd = "Cur_DateEnd",
}
