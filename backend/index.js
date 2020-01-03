const { ApolloServer } = require('apollo-server');

const mongoose = require('mongoose');

const Classes = require('./models/Classes');
const { MONGODB } = require('./config');
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers');


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