(function() {
  'use strict';

  angular.module('spot')
    .controller('HomeCtrl', HomeCtrl);


  function HomeCtrl($scope, ExerciseService, $location) {

    $scope.remove = remove;
    $scope.submit = submit;
    $scope.edit = edit;

    // Initializations
    $scope.data = {};
    getList();

    // Internal Functions
    function clearForm() {
      $scope.data.name = null;
      $scope.data.rest = null;
    };

    function edit(id) {
      recId = id;
      var oldObj = $scope.exercises.$getRecord(id);
      updateForm(oldObj);
    };

    function getList(){
      ExerciseService.getExercises()
        .then(function(data){
            $scope.exercises = data;
      });
    };

    function remove(id) {
      ExerciseService.remove(id);
    };

    function submit() {
      if (false) {
        recId = null;
      } else {
        ExerciseService.add($scope.data)
          .then(function(){
            clearForm();
            getList();
          });
      }
    }
  };

})();
