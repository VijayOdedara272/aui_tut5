const mongoose = require('mongoose');
const materialSchema = mongoose.Schema({
    modelName: String,
    gradeName: String,
    diameter: Number,
});

module.exports = mongoose.model('Material', materialSchema);