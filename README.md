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

Once you have grabbed the connection string  
