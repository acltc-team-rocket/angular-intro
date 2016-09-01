(function () {
  "use strict";
  angular.module("app").controller("exampleCtrl", function($scope) {
      $scope.reviews = ["it was awesome", "it was terrible", "No, I think Angular is so awesome!!!"]

      $scope.addReview = function(newReview) {
        $scope.reviews.push(newReview);
      }











    window.$scope = $scope;
  });
})();