const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/responseModel');

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://vegesh:87456123@userdetails.sjfstkg.mongodb.net/UserDetails");

app.post('/', (req, res) => {
    userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.get('/login', (req, res) => {
    const {email} = req.body;
    userModel.findOne(email)
    .then(details => {
        res.json(details);
    })
    .catch(err => {
        res.json(err);
    })
})




app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Find user by email and password
    userModel.findOne({ email, password })
    .then(user => {
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        res.json(user);
    })
    .catch(err => res.status(500).json({ message: 'Internal server error' }));
});




app.listen(3011, ()=>{
    console.log("Server is running");
})



