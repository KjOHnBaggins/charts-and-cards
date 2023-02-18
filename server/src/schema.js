const typeDefs = `#graphql
    type Query {
        country(id: String!): Country
        countryInfo(id: String!): CountryInfo
        population(id: String!): Population
        populationByAges(id:String!): PopulationByAges
        unemployment(id:String!): Unemployment
        employment(id:String!): Employment
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
        value: String!
    }
    type CountryInfo {
        internetUsage: IndicatorReturn
        gdp: IndicatorReturn
        militaryExpense: IndicatorReturn
        lifeExpectancy: IndicatorReturn
    }
    type Population {
        totalPopulation: IndicatorReturn
        malePopulation: IndicatorReturn
        femalePopulation: IndicatorReturn
    }
    type PopulationByAges {
        child: IndicatorReturn
        teenage: IndicatorReturn
        adult: IndicatorReturn
        elderly: IndicatorReturn
    }
    type Unemployment {
        unemployment: IndicatorReturn
        maleUnemployment: IndicatorReturn
        femaleUnemployment: IndicatorReturn
    }
    type Employment {
        employment: IndicatorReturn
        maleEmployment: IndicatorReturn
        femaleEmployment: IndicatorReturn
    }
    type IndicatorReturn {
        date: [String]
        value: [Float]
    }
`;

export default typeDefs;
