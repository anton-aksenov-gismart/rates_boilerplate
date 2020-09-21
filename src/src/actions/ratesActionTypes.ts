const MODULE_NAME = "RATES";

export const FETCH_RATES_SUCCESS = `${MODULE_NAME}/FETCH_RATES_SUCCESS`;
export const FETCH_CURRENCIES_SUCCESS = `${MODULE_NAME}/FETCH_CURRENCIES_SUCCESS`;

interface FetchRatesAction {
  type: typeof FETCH_RATES_SUCCESS;
  rates: Array<object>;
}

interface FetchCurrenciesAction {
  type: typeof FETCH_CURRENCIES_SUCCESS;
  currencies: Array<object>;
}

export type FetchActionTypes = FetchRatesAction & FetchCurrenciesAction;
