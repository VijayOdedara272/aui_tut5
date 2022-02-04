const mongoose = require('mongoose');
const MobileSchema = mongoose.Schema({
    MobileName: String,
    ram: Number,
    rom: Number,
});

module.exports = mongoose.model('Mobile', MobileSchema);