app.directive("listitems", function () {
  console.log("listitems directive called.");
  return {
    restrict: "EA",
    template: "<h1> Items List </h1>",
    // templateUrl: '/assets/listitems.html'
  }
});

app.directive("row", function () {
  return {
    restrict: "E",
    transclude: true,
    template: "<div class='row col-sm-offset-1 col-sm-11'>" +
              "<span ng-transclude>{{title}}</span>" +
              "</div>",
    // link: function(scope,element,attrs) {
    //   scope.title = attrs.title;
    // }
  }
});