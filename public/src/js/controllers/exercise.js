(function() {
  'use strict';

  angular.module('spot')
    .controller('ExerciseCtrl', ExerciseCtrl);

  function ExerciseCtrl($scope, $stateParams, $interval) {
    var countDownInterval = null;

    $scope.name = $stateParams.exercise;
    $scope.countdown = 0;
    $scope.finishSet = finishSet;

    // Internal Functions

    function decrementCountdown() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        if (countDownInterval) {
          $interval.cancel(countDownInterval);
          $scope.countdown = 0;
        }
      }
    }

    function startCountdown() {
      countDownInterval = $interval(decrementCountdown, 1000);
    }

    function finishSet() {
      $scope.countdown = $stateParams.rest;
      startCountdown();
    }
  }

})();
