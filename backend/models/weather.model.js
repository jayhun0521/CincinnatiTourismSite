const mongoose = require('mongoose')
const Schema = mongoose.Schema
const weatherSchema = new Schema({
    tempeture: {
        type: String
    },
    wind: {
        type: String
    },
    weather: {
        type: String
    }
})

const Weather = mongoose.model('Weather', weatherSchema)
module.exports = Weather