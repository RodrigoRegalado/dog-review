// DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');

//CONFIGURATION
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//controllers
const dogsController = require('./controllers/dogs_controller');
app.use('/api/dogs', dogsController);
const profilesController = require('./controllers/profiles_controller');
app.use('/api/profiles', profilesController);
const reviewsController = require('./controllers/reviews_controller');
app.use('/api/reviews', reviewsController);


//LISTEN
app.listen(4005, () => {
    console.log('server is runnin on port 4005')
})