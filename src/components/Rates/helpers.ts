import moment from 'moment';

export type Period = {
  length: number;
  unit: 'days' | 'year' | 'years' | 'month' | 'months' | 'week' | 'weeks';
};

export const getDates = ({ length, unit }: Period) =>
  new Array(length)
    .fill(null)
    .map((_, index) => moment().subtract(index, unit).format('YYYY-MM-DD'))
    .reverse();

export const getSeries = (rates = {}, currency: string) => [
  {
    name: currency,
    data: rates[currency] ? rates[currency].map(({ value }) => value) : [],
  },
];

export const getOptions = (dates: string[]) => ({
  chart: {
    id: 'chart',
  },
  xaxis: {
    categories: dates,
  },
});
