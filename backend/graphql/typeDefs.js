const {gql} = require('apollo-server')

module.exports = gql`
type Class{
  id:ID!,
  classname:String!
  classmodule:String!
  classdays:String!
  classtype:String!
  createdAt:String!
  
}
type User{
  id:ID!
  email:String!
  token:String!
  username:String!
  createdAt:String!
}
input RegisterInput{
  username:String!
  password:String!
  confirmPassword:String!
  email:String!
}
type Query {
  getClasses: [Class]
  }

type Mutation{
  register(registerInput:RegisterInput):User!
}

`  ;