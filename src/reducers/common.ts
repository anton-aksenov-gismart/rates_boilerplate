import { AnyAction } from 'redux';
import { START_FETCHING, STOP_FETCHING, SET_CURRENCY } from 'actions/common';
import { Currency, Payload, IAction } from 'store';

const initState = {
  fetching: false,
  rates: {},
};

export interface ICommonState {
  fetching: boolean;
  rates: {
    USD?: Currency[];
    EUR?: Currency[];
    RUR?: Currency[];
  };
}

function commonReducer(
  state: ICommonState = initState,
  { type, payload }: IAction<Payload>
): ICommonState {
  switch (type) {
    case START_FETCHING: {
      return {
        ...state,
        fetching: true,
      };
    }
    case STOP_FETCHING: {
      return {
        ...state,
        fetching: false,
      };
    }
    case SET_CURRENCY: {
      if (!payload) return state;
      return {
        ...state,
        rates: {
          ...state.rates,
          [payload.code]: payload.values,
        },
      };
    }
    default:
      return state;
  }
}

export default commonReducer;
