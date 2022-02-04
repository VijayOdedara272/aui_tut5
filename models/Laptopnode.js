const mongoose = require('mongoose');
const chemicalSchema = mongoose.Schema({
    gradeName: String,
    silicon: Number,
    carbon: Number,
});

module.exports = mongoose.model('Chemical', chemicalSchema);