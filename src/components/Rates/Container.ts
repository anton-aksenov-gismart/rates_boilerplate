import { connect, ConnectedProps } from 'react-redux';
import { getRates } from 'actions/common';
import { IAppState } from 'store';
import Component from './Component';

const mapStateToProps = ({ common: { fetching, rates } }: IAppState) => ({
  fetching,
  rates,
});
const mapActionsToProps = (dispatch) => ({
  getRates: (startDate: string, endDate: string) =>
    dispatch(getRates(startDate, endDate)),
});

const connector = connect(mapStateToProps, mapActionsToProps);
export type TReduxProps = ConnectedProps<typeof connector>;
export default connector(Component);
