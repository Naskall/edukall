const Classes = require('./../../models/Classes')
module.exports = {
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