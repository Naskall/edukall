const ClassesResolvers = require('./Classes');
const UsersResolvers = require('./Users')

module.exports = {
  Query: {
    ...ClassesResolvers.Query
  },
  Mutation: {
    ...UsersResolvers.Mutation
  }
}