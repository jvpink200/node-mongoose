//for all documents in the campsites collection

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Campsite = mongoose.model('Campsite', campsiteSchema); //creates a Model named Campsite

module.exports = Campsite;