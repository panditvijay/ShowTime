const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path =require('path')

require('dotenv').config()

const app = express();

const port = process.env.PORT || 1234

app.use(cors());
app.use(express.json());


//Database connection
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true }
);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Adding routes

const usersigninRouter = require('./routes/usersignin');
const usersignupRouter = require('./routes/usersignup');
const moviesRouter =require('./routes/movie')

app.use('/movie', moviesRouter);
app.use('/users', usersigninRouter);
app.use('/users', usersignupRouter);




app.listen(port,()=>{
    console.log(`server is runnig on port ${port}`)
})

