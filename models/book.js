var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
     title  : String,
     author : String,
     image  : String,
     releaseDate: String
    // you should fill the rest of this in
 });

var books = mongoose.model('Book', BookSchema);

module.exports = books;
