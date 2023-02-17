const dogs = require('express').Router()
const db = require('../models')
const { Dog } = db 


//GET ALL DOGS

dogs.get('/', async (req,res) =>{
    try {
        const foundDogs = await Dog.findAll()
        res.status(200).json(foundDogs)
    } catch (err) {
        res.status(500).send("server error")
        console.log(err)
    }
})

module.exports = dogs