(function() {
  'use strict';

  angular.module('spot')
    .controller('HomeCtrl', HomeCtrl);


  function HomeCtrl($scope, ExerciseService, $location) {

    $scope.remove = remove;
    $scope.submit = submit;
    $scope.edit = edit;

    // Initializations
    $scope.exercise = {};
    getList();

    // Internal Functions
    function clearForm() {
      $scope.exercise.name = null;
      $scope.exercise.rest = null;
    };

    function edit(id) {
      ExerciseService.getExerciseById(id).then(function(data) {
        $scope.exercise = data;
      });
      console.log('id to edit', id);
    };

    function getList() {
      ExerciseService.getExercises()
        .then(function(data) {
          $scope.exercises = data;
        });
    };

    function remove(id) {
      ExerciseService.remove(id).then(
        function(response) {
          getList();
        });
    };

    function submit() {
      if ($scope.exercise._id) {
        console.log('Updating data...');
        ExerciseService.update($scope.exercise)
          .then(function() {
            clearForm();
            getList();
          });
      } else {
        ExerciseService.add($scope.exercise)
          .then(function() {
            clearForm();
            getList();
          });
      }
    }
  };

})();
