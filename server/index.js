const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/responseModel');

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/EndLab");

app.post('/', (req, res) => {
    userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.get('/details', (req, res) => {
    const {name} = req.body;
    userModel.findOne(name)
    .then(details => {
        res.json(details);
    })
    .catch(err => {
        res.json(err);
    })
})

app.listen(3011, ()=>{
    console.log("Server is running");
})



