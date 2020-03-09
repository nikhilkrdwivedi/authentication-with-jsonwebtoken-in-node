// const router =  require('express').Router();
express = require('express');
var router = express.Router();
const User = require('../model/User');
const {registerValidation,loginValidation} = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register',async (req,res)=>{
  const {error} = registerValidation(req.body);
 if(error) return res.status(400).send(error.details[0].message);
 const existUser = await User.findOne({email:req.body.email});
//  console.log(existUser)
 if(existUser) return res.status(400).send("Bad Request!!!");
//hash password
   const salt = await bcrypt.genSalt(10);
   const hashPassword = await bcrypt.hash(req.body.password,salt);

   console.log(salt);
 //create a new user
  const user = new User({
   name: req.body.name,
   email: req.body.email,
   password: hashPassword
});
   try{
   //Lets validate the data before make a call ussr
    const saveUser = await  user.save();
    res.send(saveUser);
   }catch(err){
      res.status(400).send(err); 
   }
});
router.post('/login',async(req,res)=>{
const {error} = loginValidation(req.body);
if(error) return res.status(400).send(error.details[0].message);
const user = await User.findOne({email:req.body.email});
if(!user) return res.status(400).send("Bad Request!!!");
//if password is correct 
const validPass = await bcrypt.compare(req.body.password,user.password);
if(!validPass) return res.status(400).send("invalid password");

//create and assign a token

// res.send("LoginIN...") 
const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET)
res.header('auth-token',token).send(token);
});
module.exports = router;