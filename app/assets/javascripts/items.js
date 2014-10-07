app = angular.module("shoppingListApp", ["ngResource"])

app.factory('Items', ['$resource', function($resource){
  return $resource('/items/:id.json', {id: '@id'}, {update: {method: 'PUT'}});
}]);
// Factory: create RESTful routes - tied to rails controller actions
// "GET" - query(), "POST" - save(), "DELETE" - $remove() or $delete()
//  have to specify a "PUT" - $update() function

app.controller("itemController",["$scope", "Items",
  function ($scope, Items) {
    console.log("Controller Loaded!");
    $scope.items = Items.query();
    $scope.lists = ["Costco", "Whole Foods", "Foodland"];

    $scope.addItem = function () {
      $scope.newItem.done = false;
      $scope.newItem.list = "Costco"; // need to use select box
      item = Items.save($scope.newItem);
      $scope.items.push(item);
      $scope.newTodo = {};
    }

    $scope.update = function (item) {
      console.log("inside update, list item: " + item.done);
      item.done = item.done ? false : true;
      console.log(item.done);
      item.$update();
    }

    $scope.delete = function (item) {
      console.log("inside delete");
      var items = $scope.items;
      console.log("type of items: " + typeof(items));
      var index = items.indexOf(item);
      console.log("index of the item: " + index);
      if(index !== -1) {
        items.splice(index, 1);
      }
      item.$remove();
    }
  }
]);