(function() {
  'use strict';
  angular
    .module('spot')
    .service('ExerciseService', ExerciseService);

  var FIREBASE_URL = 'https://myspotter.firebaseio.com';

  function ExerciseService($firebaseArray, $firebaseObject, $http) {
    var self = this;
    var ref = new Firebase(FIREBASE_URL);

    self.getExerciseById = getExerciseById;
    self.getExercises = getExercises;
    self.rootRef = rootRef;
    self.remove = remove;

    // Internal functions
    function getExerciseById(id) {
      return $firebaseObject(ref.child('exercises').child(id));
    }

    function getExercises() {
      return $http.get('/api/exercises').then(
        function(response){
          return response.data;
        }, onError
      );

      //return $firebaseArray(ref.child('exercises'));
    }

    function remove(id){
      var toRemoveObj = getExerciseById(id);
      toRemoveObj.$remove().then(function(ref) {}, onError);
    }

    var onError = function(err) {
      console.log('Error', err);
    }

    function rootRef(){
      return ref;
    }

  }
})();
