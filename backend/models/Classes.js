const { model, Schema } = require('mongoose');

const classesSchema = new Schema({
  classname: String,
  classmodule: String,
  classdays: String,
  classType: String,
  createdAt: String,

});

module.exports = model('Classes', classesSchema)