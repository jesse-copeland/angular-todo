var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  title: {type: String, required: true},
  completed: {type: Boolean, default: false},
  createdAt: {type: Date, default: Date.now}
});


module.exports = mongoose.model('todos', todoSchema);