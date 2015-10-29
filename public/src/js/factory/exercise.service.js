(function() {
  'use strict';
  angular
    .module('spot')
    .service('ExerciseService', ExerciseService);

  var CONFIG = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded' // Note the appropriate header
    }
  };

  function ExerciseService($http, $httpParamSerializerJQLike) {
    var service = this;

    service.getExercises = getExercises;
    service.remove = remove;
    service.add = add;
    service.update = update;
    service.getExerciseById = getExerciseById;

    // Internal functions
    function getExercises() {
      return $http.get('/api/exercises').then(
        function(response){
          return response.data;
        }, onError
      );
    }

    function getExerciseById(id){
      return $http.get('/api/exercises/' + id).then(
        function(response){
          console.log(response.data);
          return response.data;
        }, onError
      );
    }

    function add(form){
      return $http.post( '/api/exercises/add', $httpParamSerializerJQLike(form), CONFIG)
        .then(
          function(data){
            console.log('success', data);
            return data;
          }, onError
        );
    }

    function update(form){
      return $http.post( '/api/exercises/edit', $httpParamSerializerJQLike(form), CONFIG)
        .then(
          function(data){
            console.log('success', data);
            return data;
          }, onError
        );
    }

    function remove(id){
      return $http.delete('/api/exercises/' + id).then(
        function(response){
          return response;
        }, onError
      );
    }

    function onError(err) {
      console.log('Error', err);
    }

  }
})();
