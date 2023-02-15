// const typeDefs = `#graphql
//   type Book {
//     title: String
//     author: String
//   }
//   type Query {
//     books: [Book]
//   }
// `;

const typeDefs = `#graphql
    type Query {
        country: Country
    }
    type Country {
        name: String
        region: String
        capitalCity: String
        longitude: Int
        latitude: Int
    }
`;

export default typeDefs;
