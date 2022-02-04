const mongoose = require('mongoose');
const LaptopSchema = mongoose.Schema({
    LaptopName: String,
    ram: Number,
    rom: Number,
});

module.exports = mongoose.model('Laptop', LaptopSchema);