const router = require('express').Router()
let Weather = require('../models/weather.model')

router.route('/').get((req, res) =>{
    Weather.find()
    .then((weather) =>{
        res.json(weather)
    }).catch((err) => {
        res.status(400).json('Error' + err)
    })
})

module.exports = router;