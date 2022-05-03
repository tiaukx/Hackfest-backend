# Cinema-Hackfest-backend

This repo is a simple backend application for the TDP Hackfest Project. 

It is a __Node.JS, Express, MongoDB__ backend application that requires some minor configuration for it to run. 

## Requirements

MongoDB Server (Either local or through MongoDB Atlas) 
NodeJS (Should be installed for React anyway) 

## Setup

``` bash
<!-- Clone down the entire repo to your local computer -->
git clone https://github.com/Reece-elder/Cinema-Hackfest-backend

<!-- Navigate to the cloned down project -->
cd Cinema-Hackfest-backend

<!-- Navigate to the backend folder where the code is stored -->
cd backend

<!-- npm install reads the dependencies in package.json and installs all the node modules needed -->
npm install

```

Once you have cloned down all the files and installed all dependencies you need to start your mongodb server either through `mongoDB Compass` or `mongoDB Atlas`. 

Once the mongodb server has been started you need to grab the connection string, this will likely be `mongodb://localhost:27017/` but you can get this by copying the connection string from your mongodb console. 


### Backend Configuration 

Once you have grabbed the connection string you need to modify the `ADD_DB_INFO_HERE.js` file which is in the backend folder. 
This file includes the line `const DB_URL = "ENTER DB_URL HERE"` you must replace `ENTER DB_URL HERE` with the database name you copied from MongoDB. 

Once you have configured the MongoDB Server and the DB_URl you can start the backend app by navigating to the location of `package.json` and running `npm start`. 
If the console prints out "Connected" your backend is connected to the database. 

 ### Testing the Backend Configuration 
 
Once your backend is up and running you can test it is working by going to your browser and putting in `localhost:5020/` if the page shows `Hey, this works!` it's configured correctly.

## JSON Object - Movie

The following is the JSON object you will use for all of the routes. 

``` 
{
  "title" : "title of movie",
  "runTime" : 123,
  "releaseDate" : "When was it released (String)",
  "description" : "What is the movie about (String)",
  cast : ["Array", "of", "cast", "as", "strings"],
  ratings : [
  {
    "score" : 10,
    "user" : "username of the rater",
    "comment" : "a comment being added for the rater", 
    "title" : "the name of the movie"
  }, 
  {
    "score" : 10,
    "user" : "username of the rater",
    "comment" : "a comment being added for the rater", 
    "title" : "the name of the movie"
  }, 
  ]
}
```

By default there are no restrictions on any of the fields within the database, as well as the fact that when creating a new object there is no requirement for any of the fields being included. Obviously if you are not being careful with the data you enter into the database you will have issues with pulling the data, so it is reccomended to understand and know the JSON you are posting. 

This object also includes an array of embedded documents (ratings), the Movie contains a ratings field which can contain a number of rating objects. 
When you are posting new ratings to the database you pass in to the body a json that looks like this: 

``` 
{
    "score" : 10,
    "user" : "Reece",
    "comment" : "Movie sucked",
    "title" : "Batman"
}
```
By adding a new rating you are not adding a new movie document, but updating an existing document and adding a rating embedded document to it. 

## Routes

The following routes are included in the application and can be used to access the database. 

### POST "/movie" 

Takes in a JSON Body in the format and posts it to the database, the backend adds the rating attribute without it being needed in the request body. 

``` {
    "title" : "new movie",
    "runTime" : 130,
    "releaseData" : "12th April 2021",
    "description" : "IM BATMAN",
    "cast" : ["john Smith", "Jane Smith"]
}
```

### POST "/rating"

Takes in a JSON body in the format, finds the first movie with a title that matches the title in the rating document and pushes this rating to the end of the array.

``` JSON
{
    "title" : "new movie",
    "runTime" : 130,
    "releaseData" : "12th April 2021",
    "description" : "IM BATMAN",
    "cast" : ["john Smith", "Jane Smith"]
}
```

### GET "movie/all"

Doesn't take in any request and returns all the documents in the database as an array of objects. 

### GET "movie/id"

Takes in a movie `_id` (7f8fbf8fefewwef8weg etc.) as a query paramater and returns this document. 

### GET "movie/title/name-of-movie"

Takes in a movie `title` as a query param and returns this document. 

### DELETE "movie/id"

Takes in a movie `_id` (7f8fbf8fefewwef8weg etc.) as a query paramater and removes this document, returns a string saying "Deleted item"

### GET "rating/id"

Takes in a movie `_id` (7f8fbf8fefewwef8weg etc.) as a query paramater, finds all of the ratings and pulls the score from each of them and returns an average score. 
