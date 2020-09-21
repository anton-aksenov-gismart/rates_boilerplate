const MODULE_NAME = "COMMON";

export const START_FETCHING = `${MODULE_NAME}/START_FETCHING`;
export const STOP_FETCHING = `${MODULE_NAME}/STOP_FETCHING`;
export const ERROR_FETCHING = `${MODULE_NAME}/ERROR_FETCHING`;

interface FetchingAction {
  type: typeof START_FETCHING | typeof STOP_FETCHING;
}

interface FetchingErrorAction {
  type: typeof ERROR_FETCHING;
  error: Error;
}

export type FetchingActionType = FetchingAction;
export type FetchingErrorActionType = FetchingErrorAction;
