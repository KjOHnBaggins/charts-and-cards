const resolvers = {
  Query: {
    country: async (_, { id }, { dataSources }) => {
      return dataSources.countryAPI.getCountry(id);
    },
    countryInfo: async (_, { id }, { dataSources }) => {
      return dataSources.countryAPI.getCountryInfo(id);
    },
    population: async (_, { id }, { dataSources }) => {
      return dataSources.countryAPI.getPopulation(id);
    },
    populationByAges: async (_, { id }, { dataSources }) => {
      return dataSources.countryAPI.getPopulationByAges(id);
    },
    unemployment: async (_, { id }, { dataSources }) => {
      return dataSources.countryAPI.getUnemployment(id);
    },
    employment: async (_, { id }, { dataSources }) => {
      return dataSources.countryAPI.getEmployment(id);
    },
  },
};

export default resolvers;
