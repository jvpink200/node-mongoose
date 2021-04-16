//for all documents in the campsites collection

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commmentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [commmentSchema]
}, {
    timestamps: true
});

const Campsite = mongoose.model('Campsite', campsiteSchema); //creates a Model named Campsite

module.exports = Campsite;