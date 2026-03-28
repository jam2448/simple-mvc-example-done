
//import mongoose
const mongoose = require('mongoose');

//vairbale to hold the model
let dogModel; 


//build the dog schema with the proper info:
//name, breed, age, and created date

const DogSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    breed: {
        type: String,
        required: true,
        trim: true,
    },

    age: {
        type: Number,
        min: 1,
        required: true, 
    },

    createdDate: {
        type: Date,
        default: Date.now,
    }


});

//create the cat model
dogModel = mongoose.model('Dog', DogSchema);

//export the model
module.exports = dogModel;