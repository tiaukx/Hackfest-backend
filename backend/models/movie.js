const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
    score: Number, 
    user: String, 
    comment: String,
    title: String
});

const movieSchema = new mongoose.Schema({
    title: String,
    runTime: Number, 
    releaseDate: String,
    description: String, 
    director: String,
    cast: [String],
    ratings: [ratingSchema]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = {"Movie" : Movie};



