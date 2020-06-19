
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  moviename: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  releasedate: { type: Date },
  director:{type: String, required: true},
  actors:{type: String, required: true},
  language:{type: String, required: true},
  ratings: { type: Number, required: true },
  generes:{type: String, required: true}
  

}, {
  timestamps: true,
});

const Exercise = mongoose.model('Movies', exerciseSchema);

module.exports = Exercise;