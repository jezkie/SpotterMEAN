(function() {
  'use strict';

  angular.module('spot')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($scope, ExerciseService) {

    $scope.data = {
      name: null,
      rest: null
    };

    var clearForm = function() {
      $scope.data.name = null;
      $scope.data.rest = null;
    };

    var updateForm = function(model) {
      $scope.data.rest = model.rest;
      $scope.data.name = model.name;
    };

    var updateModel = function(model, form) {
      model.name = $scope.data.name;
      model.rest = $scope.data.rest;
      return model;
    };

    var recId = null;
    $scope.edit = function(id) {
      recId = id;
      var oldObj = $scope.exercises.$getRecord(id);
      updateForm(oldObj);
    };

    //$scope.exercises = ExerciseService.getExercises();
    ExerciseService.getExercises()
      .then(function(data){
          $scope.exercises = data;
      });
    $scope.remove = function(id) {
      ExerciseService.remove(id);
    };

    $scope.submit = function() {
      if (recId) {
        var toSaveObj = $scope.exercises.$getRecord(recId);
        $scope.exercises.$save(updateModel(toSaveObj, $scope.data));
        recId = null;
      } else {
        var ref = ExerciseService.rootRef();
        ref.child('exercises/' + $scope.data.name)
          .set($scope.data);
      }
      clearForm();
    }

  };

})();
