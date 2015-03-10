angular
  .module('TodoApp')
  .service('TodoService', ['$http', function ($http) {
    this.getAll = function () {
      return $http.get('/api');
    };

    this.create = function (todo) {
      return $http.post('/api', todo);
    };
  }]);
