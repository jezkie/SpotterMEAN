(function() {
  'use strict';
  angular
    .module('spot')
    .service('ExerciseService', ExerciseService);

  var FIREBASE_URL = 'https://myspotter.firebaseio.com';
  var CONFIG = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded' // Note the appropriate header
    }
  };

  function ExerciseService($firebaseArray, $firebaseObject, $http, $httpParamSerializerJQLike) {
    var service = this;
    var ref = new Firebase(FIREBASE_URL);


    service.getExerciseById = getExerciseById;
    service.getExercises = getExercises;
    service.rootRef = rootRef;
    service.remove = remove;
    service.add = add;

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
    }

    function add(form){
      return $http.post( '/api/exercises', $httpParamSerializerJQLike($scope.data), CONFIG)
        .then(
          function(data){
            console.log('success', data);
            return data;
          }, onError
        );
    }

    function remove(id){
      var toRemoveObj = getExerciseById(id);
      toRemoveObj.$remove().then(function(ref) {}, onError);
    }

    function onError(err) {
      console.log('Error', err);
    }

    function rootRef(){
      return ref;
    }

  }
})();
