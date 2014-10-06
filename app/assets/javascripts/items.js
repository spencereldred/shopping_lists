app = angular.module("shoppingListApp", ["ngResource"])

app.factory('Items', ['$resource', function($resource){
  return $resource('/items/:id.json', {id: '@id'}, {update: {method: 'PUT'}});
}]);

app.controller("itemController",["$scope", "Items",
  function ($scope, Items) {
    console.log("Controller Loaded!");
    $scope.items = Items.query();

    $scope.update = function (item) {
      console.log("inside update, list item: " + item.done);
      item.done = item.done ? false : true;
      console.log(item.done);
      item.$update();
    }
  }
]);