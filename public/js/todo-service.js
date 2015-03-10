angular
  .module('TodoApp')
  .service('TodoService', ['$http', function ($http) {
    this.getAll = function () {
      $http.get('/api');
    };
  }]);
