const mongoose = require('mongoose');

const submitFormM={
    fullname:String,
    email:String,
    content:String
}

const Sform = mongoose.model("Submitform",submitFormM);

module.exports = Sform;