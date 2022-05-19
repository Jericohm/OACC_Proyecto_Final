var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MarvelSchema = Schema({
  id: Number,
  nombre: String,
  apodo: String,
  poder: String,
  pelicula: String,
  enemigo: String
});

module.exports = mongoose.model('informacion', MarvelSchema);
