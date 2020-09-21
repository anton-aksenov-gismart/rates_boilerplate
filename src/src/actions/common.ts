import { TAppDispatchThunk } from "store";
import {
  ERROR_FETCHING,
  START_FETCHING,
  STOP_FETCHING,
} from "actions/commonActionTypes";

export const startFetching = (): any => async (
  dispatch: TAppDispatchThunk<never>
): Promise<void> => {
  dispatch({
    type: START_FETCHING,
  });
};
export const stopFetching = (): any => async (
  dispatch: TAppDispatchThunk<never>
): Promise<void> => {
  dispatch({
    type: STOP_FETCHING,
  });
};

export const errorFetching = (error: Error): any => async (
  dispatch: TAppDispatchThunk<never>
): Promise<void> => {
  dispatch({
    type: ERROR_FETCHING,
    error,
  });
};
