const express = require('express');
const router = express.Router();
const Sform = require('../models/submitFormmodel');

router.route('/create').post((req,res)=>{
    const fullname = req.body.fullname;
    const email = req.body.email;
    const content = req.body.content;
    const newSubmit = new Sform({
        fullname,email,content
    });

    newSubmit.save();
})

module.exports = router;
