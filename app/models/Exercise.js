var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called

var ExerciseSchema = {
	name : {type : String, default: ''},
  rest : {type : Number, min: 0, max: 300}
};

module.exports = mongoose.model('Exercise', ExerciseSchema);
