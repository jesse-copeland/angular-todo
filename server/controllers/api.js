var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');

// list all todos
router.get('/', function (req, res) {
  Todo.find(function (err, todos) {
    if(err) throw err;
    res.json(todos);
  });
});

// add todo
router.post('/', function (req, res) {
  Todo.create({title: req.body.title}, function (err, todo) {
    if (err) throw err;
    res.json(todo);
  });
});

// completed todo
router.put('/:id/:completed', function (req, res) {
  var id = req.params.id;
  var completed = req.params.completed;

  Todo.update({_id: id}, {$set: {completed: completed}}, function (err, updateCount, result) {
    if (err) throw err;
    res.json(result);
  });
});

// delete todo
router.delete('/:id', function (req, res) {
  Todo.find({_id: req.params.id}).remove().exec(function (err, numRemoved, result) {
    if (err) throw err;
    res.json(result); // Status object
  });
});

module.exports = router;