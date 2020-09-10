import React, { useEffect, useMemo, useState, useCallback } from 'react';
import ApexChart, { Props } from 'react-apexcharts';
import { CURRENCY_TYPES, PERIODS } from 'root-constants';
import { TReduxProps } from './Container';
import DropDown from '../DropDown';
import { getSeries, getDates, getOptions } from './helpers';
import { StyledContainer, StyledContainerDrop } from './style';

export type TComponentProps = {} & TReduxProps;

const Rates: React.FC<TComponentProps> = ({ getRates, rates }) => {
  const [currentCurrency, setCurrentCurrency] = useState('USD');
  const [currentPeriod, setCurrentPeriod] = useState('Seven days');
  const [dates, setDates] = useState<string[] | []>([]);
  const handleCurrencyChange = useCallback((value: string): void => {
    setCurrentCurrency(value);
  }, []);

  const handlePeriodChange = useCallback((value: string): void => {
    setCurrentPeriod(value);
  }, []);

  const series = useMemo(() => getSeries(rates, currentCurrency), [
    rates,
    currentCurrency,
  ]);

  const options = useMemo(() => getOptions(dates), [dates]);

  const type = 'line';

  useEffect(() => {
    setDates(getDates(PERIODS[currentPeriod]));
  }, [currentPeriod]);

  useEffect(() => {
    if (dates.length) {
      getRates(dates[0], dates[dates.length - 1]);
    }
  }, [dates]);

  return (
    <>
      <StyledContainer>
        <ApexChart
          options={options}
          series={series}
          type={type}
          width={500}
          height={300}
        />

        <StyledContainerDrop>
          <DropDown
            handleChange={handleCurrencyChange}
            options={Object.values(CURRENCY_TYPES)}
            label="Select currency"
          />
          <DropDown
            handleChange={handlePeriodChange}
            options={Object.keys(PERIODS)}
            label="Select period"
          />
        </StyledContainerDrop>
      </StyledContainer>
    </>
  );
};

export default Rates;
