export const BASE_URL = "http://api.worldbank.org/v2/country";

export const fetchCountryInfo = async (countryCode) => {
  const country = await fetch(`${BASE_URL}/${countryCode}?format=json`).then(
    (response) => response.json()
  );
  console.log(country);

  return {
    country,
  };
};

export const fetchFromAPI = async (countryCode) => {
  const population = await fetch(
    `${BASE_URL}/${countryCode}/indicator/SP.POP.TOTL?format=json`
  ).then((response) => response.json());
  const malePopulation = await fetch(
    `${BASE_URL}/${countryCode}/indicator/SP.POP.TOTL.MA.IN?format=json`
  ).then((response) => response.json());
  const femalePopulation = await fetch(
    `${BASE_URL}/${countryCode}/indicator/SP.POP.TOTL.FE.IN?format=json`
  ).then((response) => response.json());

  return {
    population,
    malePopulation,
    femalePopulation,
  };
};

export const fetchPopulationByAges = async (countryCode) => {
  const child = await fetch(
    `${BASE_URL}/${countryCode}/indicator/JI.POP.0014.ZS?format=json`
  ).then((response) => response.json());
  const teenage = await fetch(
    `${BASE_URL}/${countryCode}/indicator/JI.POP.1524.ZS?format=json`
  ).then((response) => response.json());
  const adult = await fetch(
    `${BASE_URL}/${countryCode}/indicator/JI.POP.2564.ZS?format=json`
  ).then((response) => response.json());
  const elderly = await fetch(
    `${BASE_URL}/${countryCode}/indicator/JI.POP.65UP.ZS?format=json`
  ).then((response) => response.json());

  // const ages = [];
  // const regex = new RegExp("Population Age", "i");
  // for (let i = 300; i <= 400; i++) {
  //   const res = await fetch(
  //     `https://api.worldbank.org/v2/indicator?page=${i}&format=json`
  //   ).then((response) => response.json());
  //   ages.push(...res[1].filter((res) => regex.test(res?.name)));
  // }
  return {
    child,
    teenage,
    adult,
    elderly,
  };
};

export const fetchEmploymentData = async (countryCode) => {
  const unemployment = await fetch(
    `${BASE_URL}/${countryCode}/indicator/SL.UEM.TOTL.ZS?format=json`
  ).then((response) => response.json());
  const employment = await fetch(
    `${BASE_URL}/${countryCode}/indicator/BI.EMP.TOTL.PB.ZS?format=json`
  ).then((response) => response.json());
  const maleEmployment = await fetch(
    `${BASE_URL}/${countryCode}/indicator/BI.EMP.TOTL.PB.MA.ZS?format=json`
  ).then((response) => response.json());
  const femaleEmployment = await fetch(
    `${BASE_URL}/${countryCode}/indicator/BI.EMP.TOTL.PB.FE.ZS?format=json`
  ).then((response) => response.json());

  return {
    unemployment,
    employment,
    maleEmployment,
    femaleEmployment,
  };
};

export const fetchInternetUsage = async (countryCode) => {
  const internetUsage = await fetch(
    `${BASE_URL}/${countryCode}/indicator/IT.NET.USER.ZS?format=json`
  ).then((response) => response.json());
  return {
    internetUsage,
  };
};
export const fetchGDP = async (countryCode) => {
  const gdp = await fetch(
    `${BASE_URL}/${countryCode}/indicator/NY.GDP.MKTP.CD?format=json`
  ).then((response) => response.json());
  return {
    gdp,
  };
};

// SL.UEM.TOTL indonesia labour servey
// SL.UEM.TOTL.NE.ZS national
// SL.UEM.TOTL.ZS ilo
// BI.EMP.TOTL.PB.ZS public sector employment as a share of total employment
// BI.EMP.TOTL.PB.FE.ZS public sector employment female
// BI.EMP.TOTL.PB.MA.ZS public sector employment male
// SP.POP.TOTL.FE.IN female population FE.ZS for %
// SP.POP.TOTL.MA.IN male population MA.ZS for %
// JI.POP.0014.ZS Population aged 0-14, total (% of total population)
// JI.POP.1524.ZS Population aged 15-24, total (% of total population)
// JI.POP.2564.ZS Population aged 25-64, total (% of total population)
// JI.POP.65UP.ZS Population aged 65 and above, total (% of total population)
// IN.EC.POP.GRWTHRAT decadal growth rate of population
// IT.NET.USER.ZS individuals using the internet (percent of population)
