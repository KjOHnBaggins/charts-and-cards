import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import MoviesAPI from "./datasources/data.js";
import resolvers from "./resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        moviesAPI: new MoviesAPI({ cache }),
      },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
