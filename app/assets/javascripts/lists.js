app = angular.module("shoppingListApp", ["ngResource"])

app.controller("listController",["$scope", "$resource",
  function ($scope,$resource) {
    console.log("Controller Loaded!")
  }
]);