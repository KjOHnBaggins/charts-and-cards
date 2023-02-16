const resolvers = {
  Query: {
    country: async (_, { id }, { dataSources }) => {
      return dataSources.moviesAPI.getCountryInfo(id);
    },
    // movie: async (_, { id }, { dataSources }) => {
    //   return dataSources.moviesAPI.getMovie(id);
    // },
    // mostViewedMovies: async (_, __, { dataSources }) => {
    //   return dataSources.moviesAPI.getMostViewedMovies();
    // },
    // favorites: async (_, __, { dataSources }) => {
    //   return dataSources.personalizationAPI.getFavorites();
    // },
  },
};

export default resolvers;
