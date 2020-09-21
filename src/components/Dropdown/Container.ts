import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchAllCurrencies,
  fetchRatesByCurrencyId,
} from "actions/ratesActions";

import { IAppState } from "store";
import Dropdown from "./Dropdown";

import { getCurrenciesArr } from "../common/helpers";
import { currencyToDisplay } from "../common/config";

const mapStateToProps = (state: IAppState) => ({
  fetching: state.common.fetching,
  menuItems: getCurrenciesArr(currencyToDisplay, state.rates.currencies),
});

const mapActionsToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchRates: fetchRatesByCurrencyId,
      fetchCurrencies: fetchAllCurrencies,
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapActionsToProps);
export type TReduxProps = ConnectedProps<typeof connector>;
export default connector(Dropdown);
