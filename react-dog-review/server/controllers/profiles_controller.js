const profiles = require('express').Router()
const db = require('../models')
const { Profile } = db

//GET ALL Profiles

profiles.get('/', async (req,res) => {
    try{
        const foundProfiles = await Profile.findAll()
        res.status(200).json(foundProfiles)
    } catch (err) {
        res.status(500).send("server error")
        console.log(err)
    }
})

module.exports = profiles