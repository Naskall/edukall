const { model, Schema } = require('mongoose');

const classesSchema = new Schema({
  classname: String,
  classmodule: String,
  classdays: [
    { day: String } 
  ],
  classType: String,
  createdAt: String,

});

module.exports = model('Classes', classesSchema)