export const fetchRate = async (
  currency: string,
  start: string,
  end: string
) => {
  const response = await fetch(
    `https://www.nbrb.by/API/ExRates/Rates/Dynamics/${currency}?startDate=${start}&endDate=${end}`
  );

  return response.json();
};
