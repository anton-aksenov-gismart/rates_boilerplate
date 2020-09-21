import { AnyAction } from "redux";
import {
  START_FETCHING,
  STOP_FETCHING,
  ERROR_FETCHING,
} from "actions/commonActionTypes";

const initState = {
  fetching: false,
  error: null,
};

export interface ICommonState {
  fetching: boolean;
  error?: Error | null;
}

function commonReducer(
  state: ICommonState = initState,
  { type, payload = null }: AnyAction
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
    case ERROR_FETCHING: {
      return {
        ...state,
        error: payload,
      };
    }
    default:
      return state;
  }
}

export default commonReducer;
