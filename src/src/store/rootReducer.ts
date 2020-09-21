import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import routeHistory from "route-history";

import commonReducer from "reducers/common";
import ratesReducer from "reducers/ratesReducer";
import { IAppState } from "./models";

const rootReducer = combineReducers<IAppState>({
  router: connectRouter(routeHistory),
  common: commonReducer,
  rates: ratesReducer,
});

export default rootReducer;
