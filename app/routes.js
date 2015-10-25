var Exercise = require('./models/exercise');

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('/api/exercises', function(req, res) {
      Exercise.find(/*{'name': 'Squat'},*/ function(err, doc) {
        if (err)
          res.send(err);

        res.json(doc);
      });

    });

  app.post('/api/exercises', function(req, res){
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
};
