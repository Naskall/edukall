const { ApolloServer } = require('apollo-server');
const gql = require("graphql-tag");
const mongoose = require('mongoose');

const Classes = require('./models/Classes');
const { MONGODB } = require('./config');

const typeDefs = gql`
type Class{
  id:ID!,
  classname:String!,
  classmodule:String!,
  classdays:String!,
  classtype:String!,
  createdAt:String!,
  
}
type Query {
  getClasses: [Class]
  }
`;

const resolvers = {
  Query: {
    async getClasses() {
      try {
        const classes = await Classes.find();
        return classes;
        

      } catch (err) {
        throw new Error(err);
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Mongodb Connected')
  return server.listen({ port: 3001 })
})
  .then(res => {
    console.log(`Server is running at ${res.url}`)
  })