import { CurrencyKeys } from "../common/config";
import moment from "moment";
import * as R from "ramda";

export const getChartOptions = (baseOptions, data?: Array<object>): object => {
  if (!data) return {};
  const customCategories = data.map((item) => {
    return moment(item[CurrencyKeys.date]).format("D.MM.YYYY");
  });

  return R.mergeDeepRight(baseOptions, {
    xaxis: { categories: customCategories },
  });
};

export const getChartSeries = (data: Array<any>): any => {
  if (data?.length) {
    const seriesData = data.map((item) => item[CurrencyKeys.rate]);
    return [
      {
        name: data[0][CurrencyKeys.id],
        data: seriesData,
      },
    ];
  }
  return [];
};

export const baseChartOptions: any = {
  title: {
    text: "Rates",
    align: "left",
  },
  xaxis: {
    categories: [],
  },
};
