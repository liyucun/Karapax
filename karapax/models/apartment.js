/**
 * Created by Mia on 2015-05-07.
 */
//apartment.js
//Defines the apt info model (schema)

//Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Apt Schema
var aptSchema = new Schema({
    country: String,
    province: String,
    city: String,
    address: String,
    aptNumber: Number,
    zipcode: String,
    area: String,
    price: {eight: Number, twelve: Number},
    deposit: {eight: Number, twelve: Number},
    avaDate: Date,
    size: {
        type:Number,
        default: 0
    },
    type: String,
    bedrooms: Number,
    bathrooms: Number,
    description: String,
    //0:not ava; 1:ava; 2:booked
    state: {
        type: Number,
        'default': 0
    },
    hostId: {
        type: String,
        'default' : 'karapax'
    },
    renterId: String,
    hasFurniture: {
        type: Boolean,
        'default': true
    },
    requirements: {
        pet: {type:Boolean,'default': true},
        smoke: {type:Boolean,'default': true}
    },
    viewer: Number,
    imgPath: Array,
    around: {
        school: String,
        bus: String,
        metro: String,
        market: String,
        restaurant: String,
        bank: String,
        entertainment: String,
        others: String
    },
    furniture: {
        electrical: String,
        table: String,
        light: String,
        bed: String,
        others: String
    },
    amenities: {
        kitchen: String,
        indoor: String,
        net: String,
        elevator: String,
        entertainment: String,
        parking: String,
        others: String
    }
})
module.exports.schema = aptSchema;
module.exports.model = mongoose.model("Apt", aptSchema);