import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import CountryAPI from "./datasources/data.js";
import resolvers from "./resolvers.js";
import typeDefs from "./schema.js";

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
        countryAPI: new CountryAPI({ cache }),
      },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
