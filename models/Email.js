const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Email = new Schema({
    email : String,
});

module.exports = mongoose.model("Email", Email);