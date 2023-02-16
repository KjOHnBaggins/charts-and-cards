const typeDefs = `#graphql
    type Query {
        country(id: String!): Country
        countryInfo(id: String!): [IndicatorReturn]
        population(id: String!): [IndicatorReturn]
        populationByAges(id:String!): [IndicatorReturn]
        unemployment(id:String!): [IndicatorReturn]
        employment(id:String!): [IndicatorReturn]
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
    type IndicatorReturn {
        date: String!
        value: Float
    }
`;

export default typeDefs;
