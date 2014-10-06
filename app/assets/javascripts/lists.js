app = angular.module("shoppingListApp", ["ngResource"])

app.factory('Lists', ['$resource', function($resource){
  return $resource('/lists/:id.json', {id: '@id'}, {update: {method: 'PUT'}});
}]);

app.controller("listController",["$scope", "Lists",
  function ($scope, Lists) {
    console.log("Controller Loaded!");
    $scope.items = Lists.query();

    $scope.update = function (item) {
      console.log("inside update, list item: " + item.done);
      item.done = item.done ? false : true;
      console.log(item.done);
      item.$update();
    }
  }
]);