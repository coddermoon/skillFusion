// all dependencies

const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT ||5000


// mongoose  estublishes connection


// all routes

// error handlers

app.listen(port,()=> console.log(`listening on ${port}`));