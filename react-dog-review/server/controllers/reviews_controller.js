const reviews = require('express').Router()
const db = require('../models')
const { Review } = db

//GET ALL REVIEWS

reviews.get('/', async (req,res) => {
    try{
        const foundReviews = await Review.findAll()
        res.status(200).json(foundReviews)
    } catch (err) {
        res.status(500).send("server error")
        console.log(err)
    }
})

module.exports = reviews