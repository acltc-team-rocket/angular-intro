(function () {
  "use strict";
  angular.module("app").controller("exampleCtrl", function($scope) {
      $scope.reviews = [
        {
          text: "I love it!",
          rating: 5
        },
        {
          text: "I hate Angular. Why so serious!",
          rating: 1
        },
        {
          text: "It's so-so",
          rating: 3
        }
      ]

      $scope.addReview = function(newReviewText, newReviewRating) {
        var newReview = {
          text: newReviewText,
          rating: newReviewRating
        };
        $scope.reviews.push(newReview);
      }


    window.$scope = $scope;
  });
})();