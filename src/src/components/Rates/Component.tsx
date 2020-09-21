import React, { useEffect, useState } from "react";
import { StyledContainer } from "./style";
import {
  getChartOptions,
  getChartSeries,
  baseChartOptions,
} from "./chartHelpers";
import { createRatesUrl } from "../common/helpers";

import ApexChart, { Props } from "react-apexcharts";
import DropdownMenu from "../Dropdown";
import { TReduxProps } from "./Container";

const dropdownLabel = "Select currency to display";
const menuPlacement = "bottomCenter";

export type TComponentProps = {} & Props & TReduxProps;

const Rates: React.FC<TComponentProps> = (props) => {
  const { rates, fetchRates } = props;

  const [chartOptions, setChartOptions] = useState(baseChartOptions);
  const [chartSeries, setChartSeries] = useState([]);
  const type = "line";

  useEffect(() => {
    const url = createRatesUrl();
    fetchRates(url);
  }, []);

  useEffect(() => {
    const options = getChartOptions(baseChartOptions, rates);
    const series = getChartSeries(rates);
    setChartSeries(series);
    setChartOptions(options);
  }, [rates]);

  return (
    <div>
      <StyledContainer>
        <ApexChart
          options={chartOptions}
          series={chartSeries}
          type={type}
          width={500}
          height={300}
        />
      </StyledContainer>
      <StyledContainer>
        <DropdownMenu label={dropdownLabel} menuPlacement={menuPlacement} />
      </StyledContainer>
    </div>
  );
};

export default Rates;
