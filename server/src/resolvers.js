const resolvers = {
  Query: {
    country: async (_, { id }, { dataSources }) => {
      return dataSources.countryAPI.getCountry(id);
    },

    countryInfo: async (_, { id }, { dataSources }) => {
      const data = await dataSources.countryAPI.getCountryInfo(id);
      const internetUsage = data[0];
      const gdp = data[1];
      const militaryExpense = data[2];
      const lifeExpectancy = data[3];
      return {
        internetUsage: {
          date: [internetUsage?.date],
          value: [internetUsage?.value],
        },
        gdp: {
          date: [gdp?.date],
          value: [gdp?.value],
        },
        militaryExpense: {
          date: [militaryExpense?.date],
          value: [militaryExpense?.value],
        },
        lifeExpectancy: {
          date: [lifeExpectancy?.date],
          value: [lifeExpectancy?.value],
        },
      };
    },

    population: async (_, { id }, { dataSources }) => {
      const data = await dataSources.countryAPI.getPopulation(id);

      const totalPopulationIndex = data
        ?.map((data) => data.indicator.id)
        .lastIndexOf("SP.POP.TOTL");
      const totalPopulation = data?.splice(0, totalPopulationIndex + 1);

      const malePopulationIndex = data
        ?.map((data) => data.indicator.id)
        .lastIndexOf("SP.POP.TOTL.MA.IN");
      const malePopulation = data.splice(0, malePopulationIndex + 1);

      const femalePopulationIndex = data
        ?.map((data) => data.indicator.id)
        .lastIndexOf("SP.POP.TOTL.FE.IN");
      const femalePopulation = data.splice(0, femalePopulationIndex + 1);

      return {
        totalPopulation: {
          date: totalPopulation?.map((data) => data.date),
          value: totalPopulation.map((data) => data.value),
        },
        malePopulation: {
          date: malePopulation?.map((data) => data.date),
          value: malePopulation.map((data) => data.value),
        },
        femalePopulation: {
          date: femalePopulation?.map((data) => data.date),
          value: femalePopulation.map((data) => data.value),
        },
      };
    },

    populationByAges: async (_, { id }, { dataSources }) => {
      const data = await dataSources.countryAPI.getPopulationByAges(id);
      const child = data[0];
      const teenage = data[1];
      const adult = data[2];
      const elderly = data[3];
      return {
        child: {
          date: [child?.date],
          value: [child?.value],
        },
        teenage: {
          date: [teenage?.date],
          value: [teenage?.value],
        },
        adult: {
          date: [adult?.date],
          value: [adult?.value],
        },
        elderly: {
          date: [elderly?.date],
          value: [elderly?.value],
        },
      };
    },

    unemployment: async (_, { id }, { dataSources }) => {
      const data = await dataSources.countryAPI.getUnemployment(id);

      const unemploymentIndex = data
        ?.map((data) => data.indicator.id)
        .lastIndexOf("SL.UEM.TOTL.ZS");
      const unemployment = data?.splice(0, unemploymentIndex + 1);

      const maleUnemploymentIndex = data
        ?.map((data) => data.indicator.id)
        .lastIndexOf("SL.UEM.TOTL.MA.ZS");
      const maleUnemployment = data.splice(0, maleUnemploymentIndex + 1);

      const femaleUnemploymentIndex = data
        ?.map((data) => data.indicator.id)
        .lastIndexOf("SL.UEM.TOTL.FE.ZS");
      const femaleUnemployment = data.splice(0, femaleUnemploymentIndex + 1);

      return {
        unemployment: {
          date: unemployment?.map((data) => data.date),
          value: unemployment.map((data) => data.value),
        },
        maleUnemployment: {
          date: maleUnemployment?.map((data) => data.date),
          value: maleUnemployment.map((data) => data.value),
        },
        femaleUnemployment: {
          date: femaleUnemployment?.map((data) => data.date),
          value: femaleUnemployment.map((data) => data.value),
        },
      };
    },

    employment: async (_, { id }, { dataSources }) => {
      const data = await dataSources.countryAPI.getEmployment(id);

      const employmentIndex = data
        ?.map((data) => data.indicator.id)
        .lastIndexOf("BI.EMP.TOTL.PB.ZS");
      const employment = data?.splice(0, employmentIndex + 1);

      const maleEmploymentIndex = data
        ?.map((data) => data.indicator.id)
        .lastIndexOf("BI.EMP.TOTL.PB.MA.ZS");
      const maleEmployment = data.splice(0, maleEmploymentIndex + 1);

      const femaleEmploymentIndex = data
        ?.map((data) => data.indicator.id)
        .lastIndexOf("BI.EMP.TOTL.PB.FE.ZS");
      const femaleEmployment = data.splice(0, femaleEmploymentIndex + 1);

      return {
        employment: {
          date: employment?.map((data) => data.date),
          value: employment.map((data) => data.value),
        },
        maleEmployment: {
          date: maleEmployment?.map((data) => data.date),
          value: maleEmployment.map((data) => data.value),
        },
        femaleEmployment: {
          date: femaleEmployment?.map((data) => data.date),
          value: femaleEmployment.map((data) => data.value),
        },
      };
    },
  },
};

export default resolvers;
