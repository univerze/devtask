const mongoose = require('mongoose');

const medicineSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Medicine', medicineSchema);
