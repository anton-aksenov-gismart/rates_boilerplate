import { TAppDispatchThunk } from "store";
import { startFetching, stopFetching, errorFetching } from "actions/common";
import {
  FETCH_CURRENCIES_SUCCESS,
  FETCH_RATES_SUCCESS,
} from "actions/ratesActionTypes";

const fetchRatesSuccess = (payload: Array<object>): any => async (
  dispatch: TAppDispatchThunk<never>
): Promise<void> => {
  dispatch({
    type: FETCH_RATES_SUCCESS,
    rates: payload,
  });
};

const fetchCurrenciesSuccess = (payload: Array<object>): any => async (
  dispatch: TAppDispatchThunk<never>
): Promise<void> => {
  dispatch({
    type: FETCH_CURRENCIES_SUCCESS,
    currencies: payload,
  });
};

export const fetchRatesByCurrencyId = (url: string): any => async (
  dispatch: TAppDispatchThunk<never>
): Promise<void> => {
  dispatch(startFetching());

  fetch(url)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((res) => {
      dispatch(fetchRatesSuccess(res));
    })
    .catch((error) => dispatch(errorFetching(error)))
    .finally(() => dispatch(stopFetching()));
};

export const fetchAllCurrencies = (url: string): any => async (
  dispatch: TAppDispatchThunk<never>
): Promise<void> => {
  dispatch(startFetching());

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((res) => {
      dispatch(fetchCurrenciesSuccess(res));
    })
    .catch((error) => dispatch(errorFetching(error)))
    .finally(() => dispatch(stopFetching()));
};
