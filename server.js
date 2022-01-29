const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
 

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://valmirmujku:valmir123@cluster0.pm7xy.mongodb.net/portfolioDB");

app.use("/",require("./routes/personalDATARoute"));

app.listen(3004, function(){
    console.log('express => port 3004');
})