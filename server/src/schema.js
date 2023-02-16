const typeDefs = `#graphql
    type Query {
        country(id: String!): Country
    }
    type Country {
        id: String!
        iso2Code: String!
        name: String!
        region: Region
        capitalCity: String
        longitude: String
        latitude: String
    }
    type Region {
        id: String
        iso2Code: String
        value: String!
    }
`;

export default typeDefs;
