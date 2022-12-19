export const BASE_URL = "http://api.worldbank.org/v2/country";

export const fetchFromAPI = async (countryCode) => {
  const data = await fetch(
    `${BASE_URL}/${countryCode}/indicator/SP.POP.TOTL?format=json`
  ).then((response) => response.json());
  const res = await fetch(
    `${BASE_URL}/${countryCode}/indicator/SL.UEM.TOTL.ZS?format=json`
  ).then((response) => response.json());
  const maleEmployment = await fetch(
    `${BASE_URL}/us/indicator/BI.EMP.TOTL.PB.MA.ZS?format=json`
  ).then((response) => response.json());
  const femaleEmployment = await fetch(
    `${BASE_URL}/us/indicator/BI.EMP.TOTL.PB.FE.ZS?format=json`
  ).then((response) => response.json());

  // const gender = [];
  // const regex = new RegExp("Gender", "i");
  // for (let i = 300; i <= 400; i++) {
  //   const res = await fetch(
  //     `https://api.worldbank.org/v2/indicator?page=${i}&format=json`
  //   ).then((response) => response.json());
  //   gender.push(...res[1].filter((res) => regex.test(res?.name)));
  // }

  return { data, res, maleEmployment, femaleEmployment };
};
// SL.UEM.TOTL indo laobur servey
// SL.UEM.TOTL.NE.ZS national
// SL.UEM.TOTL.ZS ilo
// BI.EMP.TOTL.PB.FE.ZS public sector employment female
// BI.EMP.TOTL.PB.MA.ZS public sector employment male
