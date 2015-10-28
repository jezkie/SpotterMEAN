var Exercise = require('./models/exercise');

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // frontend routes =========================================================
  // route to handle all angular requests


  app.get('/api/exercises/:id', function(req, res){
    Exercise.findById(req.params.id, function(err, doc) {
      if (err)
        res.send(err);

      res.json(doc);
    });
  })

  app.get('/api/exercises', function(req, res) {
      Exercise.find(function(err, doc) {
        if (err)
          res.send(err);

        res.json(doc);
      });

    })

  app.post('/api/exercises/add', function(req, res){
    var exercise;
    console.log(req.body);

    exercise = new Exercise({
      name: req.body.name,
      rest: req.body.rest
    });

    exercise.save(function(err){
      if (!err){
        console.log('created');
      } else {
        console.log(err);
      }

    });

    return res.send(exercise);
  })

  app.post('/api/exercises/edit', function(req, res){

    console.log(req.body);

    Exercise.findById(req.body._id, function(err, exercise){
      exercise.name = req.body.name;
      exercise.rest = req.body.rest;

      exercise.save(function(err){
        if (!err){
          console.log('created');
        } else {
          console.log(err);
        }
      });

      return res.send(exercise);
    });

  })
};
