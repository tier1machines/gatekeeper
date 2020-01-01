const { buildSchema } = require("graphql");

const schema = buildSchema(`

  type Query {
    checker: Item
  }

  type Mutation {
    register(email: String!, password: String!, firstname: String!, lastname: String!): Result!
    login(email: String!, password: String!): Result!
  }

  type Result {
    auth: Boolean!
    token: String!
  }

  type Register_Result {
    user: User!
    auth: Boolean!
    token: String!
  }

  type Login_Result {
    user: Item!
    auth: Boolean!
    token: String!
  }

  type Item {
    Item: User
  }

  type User {
    user_id: ID
    email: String
    password: String
    firstname: String
    lastname: String
  }
  
`);

module.exports = schema;
