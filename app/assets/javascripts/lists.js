app = angular.module("shoppingListApp", ["ngResource"])

app.factory('Lists', ['$resource', function($resource){
  return $resource('/lists/:id.json', {id: '@id'}, {update: {method: 'PUT'}});
}]);

app.controller("listController",["$scope", "$resource", "Lists",
  function ($scope, $resource, Lists) {
    console.log("Controller Loaded!");
    $scope.items = Lists.query();
  }
]);