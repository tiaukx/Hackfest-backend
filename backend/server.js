const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const databaseCred = require('./ADD_DB_INFO_HERE.js');
const routes = require('./routes/movie-routes.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).send(err.message || "something went wrong");
})

mongoose.connect(`${databaseCred.DB_URL}cinema`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Connected`);
    }
});

const server = app.listen(5020, () => {
    console.log(`Server started on port: ${server.address().port}`);
});



