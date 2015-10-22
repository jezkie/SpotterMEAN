var Exercise = require('./models/exercise');

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('/api/exercises', function(req, res) {
      Exercise.find(function(err, doc) {
        if (err)
          res.send(err);

        res.json(doc);
      });

    })
};
