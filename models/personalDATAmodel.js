const mongoose = require('mongoose');

const personalDSchema={
    fullname:String,
    email:String,
    phone:String
}

const Personal = mongoose.model("Personal",personalDSchema);

module.exports = Personal;