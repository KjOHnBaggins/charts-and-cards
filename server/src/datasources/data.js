import { RESTDataSource } from "@apollo/datasource-rest";

class CountryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.worldbank.org/v2/country/";
  }

  async getCountry(id) {
    const data = await this.get(`${id}?format=json`);
    return data[1][0];
  }

  async getCountryInfo(id) {
    const data = await this.get(
      `${id}/indicator/IT.NET.USER.ZS;NY.GDP.MKTP.CD;MS.MIL.XPND.CN;SP.DYN.LE00.IN?source=2&mrnev=1&format=json`
    );
    return data[1];
  }

  async getPopulation(id) {
    const data = await this.get(
      `${id}/indicator/SP.POP.TOTL;SP.POP.TOTL.MA.IN;SP.POP.TOTL.FE.IN?source=2&date=1990:2021&per_page=100&format=json`
    );
    return data[1];
  }

  async getPopulationByAges(id) {
    const data = await this.get(
      `${id}/indicator/JI.POP.0014.ZS;JI.POP.1524.ZS;JI.POP.2564.ZS;JI.POP.65UP.ZS?source=86&mrv=1&format=json`
    );
    return data[1];
  }

  async getUnemployment(id) {
    const data = await this.get(
      `${id}/indicator/SL.UEM.TOTL.ZS;SL.UEM.TOTL.MA.ZS;SL.UEM.TOTL.FE.ZS?source=2&per_page=100&date=1990:2021&format=json`
    );
    return data[1];
  }

  async getEmployment(id) {
    const data = await this.get(
      `${id}/indicator/SL.EMP.TOTL.SP.ZS;SL.EMP.TOTL.SP.MA.ZS;SL.EMP.TOTL.SP.FE.ZS?source=2&per_page=100&date=1990:2021&format=json`
    );
    return data[1];
  }
}

export default CountryAPI;
