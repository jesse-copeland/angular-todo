angular
  .module('TodoApp', [])
  .controller('TodoCtrl', ['$scope','TodoService', function($scope, TodoService){
    
    TodoService.getAll().then(function (response) {
      $scope.todos = response.data;
    });

    $scope.saveTodo = function (new_title) {
      $scope.todos.push({
        title: new_title,
        completed: false
      });
      $scope.new_todo = "";

      TodoService.create({title: new_title});
    };

    $scope.enterTodo = function ($event) {
      if ($event.keyCode == 13) {
        $scope.saveTodo( $scope.new_todo );
      }
    };

  }]);