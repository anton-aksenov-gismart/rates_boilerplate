import {
  FETCH_RATES_SUCCESS,
  FETCH_CURRENCIES_SUCCESS,
  FetchActionTypes,
} from "actions/ratesActionTypes";

const initState = {
  rates: [],
  currencies: [],
};

export interface IRatesState {
  rates: Array<object>;
  currencies: Array<object>;
}

function ratesReducer(
  state: IRatesState = initState,
  { type, rates, currencies }: FetchActionTypes
): IRatesState {
  switch (type) {
    case FETCH_RATES_SUCCESS: {
      return {
        ...state,
        rates: rates,
      };
    }
    case FETCH_CURRENCIES_SUCCESS: {
      return {
        ...state,
        currencies: currencies,
      };
    }
    default:
      return state;
  }
}

export default ratesReducer;
