angular
  .module('TodoApp', [])
  .controller('TodoCtrl', ['$scope','TodoService', function($scope, TodoService){
    
    TodoService.getAll().then(function (response) {
      $scope.todos = response.data;
    });

    $scope.saveTodo = function (new_title) {
      var newTodo = {
        title: new_title,
        completed: false
      };
      $scope.todos.push(newTodo);
      $scope.todoTitleInput = "";

      TodoService.create({title: new_title}).then(function (response) {
        newTodo._id = response.data._id;
      });
    };

    $scope.enterTodo = function ($event) {
      if ($event.keyCode == 13) {
        $scope.saveTodo( $scope.todoTitleInput );
      }
    };

    $scope.todoCompleted = function (id, completed) {
      TodoService.completed(id, completed);
    };

    $scope.delete = function ( todo ) {
      $scope.todos.splice($scope.todos.indexOf(todo), 1);
      TodoService.delete(todo._id);
    };

  }]);