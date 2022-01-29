const express = require('express');
const router = express.Router();
const Personal = require('../models/personalDATAmodel');


router.route('/data').get((req,res)=>{
    Personal.find().then(foundPersonal=>res.json(foundPersonal));
})

module.exports=router;