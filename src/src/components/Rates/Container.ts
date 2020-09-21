import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchAllCurrencies,
  fetchRatesByCurrencyId,
} from "actions/ratesActions";

import { IAppState } from "store";
import Component from "./Component";
import { getCurrenciesArr } from "components/common/helpers";
import { currencyToDisplay } from "components/common/config";

const mapStateToProps = (state: IAppState) => ({
  fetching: state.common.fetching,
  rates: state.rates.rates,
  currenciesItems: getCurrenciesArr(currencyToDisplay, state.rates.currencies),
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
export default connector(Component);
