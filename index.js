const express = require("express");
const app = express();
const mongoose = require('mongoose')
const fetch = require("node-fetch");
const dotenv = require('dotenv');
dotenv.config();
//Import Route
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts')
//middleware
app.use(express.json())
//database connection
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true },
    ()=>console.log('MongoDB Connected'));

//Route Middle wares
app.use('/api/user',authRoute);
app.use('/api/posts',postRoute);
app.listen(3000,()=>{
    console.log('server Up and Running')
//     let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// let response = await fetch(url);

// let commits = await response.json(); // read response body and parse as JSON
// console.log(commits)
});