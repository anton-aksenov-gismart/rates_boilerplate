import { IAction, IAppState, TAppDispatchThunk, Payload } from 'store';
import { fetchRate } from 'api';
import { CURRENCY_CODES, CURRENCY_TYPES } from 'root-constants';
import { mapRates } from './helpers';

const MODULE_NAME = 'COMMON';

export const START_FETCHING = `${MODULE_NAME}/START_FETCHING`;
export const STOP_FETCHING = `${MODULE_NAME}/STOP_FETCHING`;
export const SET_CURRENCY = `${MODULE_NAME}/SET_CURRENCY`;

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

export const getRates = (startDate: string, endDate: string) => async (
  dispatch: TAppDispatchThunk<Payload>
): Promise<void> => {
  Promise.all(
    CURRENCY_CODES.map(async (code) => {
      const values = await fetchRate(code, startDate, endDate);

      dispatch({
        type: SET_CURRENCY,
        payload: {
          code: CURRENCY_TYPES[code],
          values: mapRates(values),
        },
      });
    })
  );
};
