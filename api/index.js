const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const app = express()
const User = require('./models/User')

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';
app.use(cors())
app.use(express.json());

mongoose.connect('mongodb+srv://isjoyxu:nnuAzhCtReOR5KMe@cluster0.scoxqav.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async(req, res) => {
    const {username, password} = req.body
    try{
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password,salt),})
        res.json(userDoc)
    } catch(e) {
        res.status(400).json(e)
    }
})
app.listen(4000)

//nnuAzhCtReOR5KMe
