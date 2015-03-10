angular
  .module('TodoApp')
  .service('TodoService', ['$http', function ($http) {
    this.getAll = function () {
      return $http.get('/api');
    };

    this.create = function (todo) {
      return $http.post('/api', todo);
    };

    this.delete = function (id) {
      return $http.delete('/api/' + id);
    };

    this.completed = function (id, completed) {
      return $http.put('/api/' + id + '/' + completed);
    };
  }]);
