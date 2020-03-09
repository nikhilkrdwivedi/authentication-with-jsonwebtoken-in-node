const router =  require('express').Router();
// const express = require('express');
// var router = express.Router();
const verify =  require('../verifyToken');
router.get('/',verify,(req,res)=>{
res.json({posts:{title:"my first post",description:"Nikhil Kumar"}});
});
module.exports = router;