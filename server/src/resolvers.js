const resolvers = {
  Query: {
    country: async (_, { countryCode }, { dataSources }) => {
      return dataSources.moviesAPI.getCountryInfo(countryCode);
    },
    movie: async (_, { id }, { dataSources }) => {
      return dataSources.moviesAPI.getMovie(id);
    },
    mostViewedMovies: async (_, __, { dataSources }) => {
      return dataSources.moviesAPI.getMostViewedMovies();
    },
    favorites: async (_, __, { dataSources }) => {
      return dataSources.personalizationAPI.getFavorites();
    },
  },
};

export default resolvers;
