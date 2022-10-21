const mongoose = require('mongoose');

const modelsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
});


const userDetails = mongoose.model('student', modelsSchema);

module.exports = userDetails;