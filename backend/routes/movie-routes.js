const Router = require("express").Router();
const {Movie} = require("../models/movie.js");

Router.get('/', (req, res) => {
    console.log("Hey, this works!");
    res.send("Hey, this works!");
});

// Posting a new movie to the database
Router.post("/movie", (req, res, next) => {
    const movieObj = req.body; 
    movieObj.rating = [];
    const movie = new Movie(movieObj);
    movie.save().then((result) => {
        res.status(201).send("Added to Database");
    }).catch((error) => {
        const err = new Error("Data is incorrect");
        next(err)
    });
});

// Posting a new rating
Router.post("/rating", (req, res, next) => {
    const rating = req.body; 
    console.log(rating);
    Movie.updateOne({title: rating.title}, {$push: {ratings: rating}}).then((result) => {
        res.status(201).send("Rating added");
    }).catch((error) => {
        const err = new Error("Data is incorrect");
        next(err)
    });
})

// Getting all Movies
Router.get("/movie/all", (req, res, next) => {
    Movie.find((err, response) => {
        if(err) {
            next(err);
        } 
        res.send(response);
    })
})

// Getting a movie by ID 
Router.get("/movie/:id", (req, res, next) => {
    Movie.findById(req.params.id, (err, result) => {
        if(err) {
            next(err);
        }
        res.status(200).send(result);
    })
});

// Getting a movie by title 
Router.get("/movie/title/:title", (req, res, next) => {
    Movie.find({title: req.params.title}, (err, result) => {
        if(err) {
            next(err);
        }
        res.status(200).send(result);
    })
});

// Removing a movie by id
Router.delete("/movie/:id", (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id, (err) => {
        if(err) {
            next(err);
        }
        res.status(202).send("Deleted Item");
    })
});

// Returning the average rating of a movie
Router.get("/rating/:id", (req, res, next) => {
    let avgRating = 0;
    Movie.findById(req.params.id, (err, result) => {
        if(err) {
            next(err);
        }
        ratingsArray = result.ratings;
        ratingsArray.forEach((rating) => {
            avgRating += rating.score;
        });
        avgRating = avgRating / ratingsArray.length;
        console.log(avgRating);
        res.status(200).send({avgRating : avgRating});
    });
});

module.exports = Router