const express = require('express');
const mongoose = require('mongoose');
const cors=require("cors");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 5000;

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(bodyParser.json());


mongoose.connect("mongodb+srv://Nithishnani:9581674020@nithish.b1u97.mongodb.net/suretrust", 
{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB:', err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  subject : String,
  message : String,
});

const User = mongoose.model('abc', userSchema);

app.post('/user', (req, res) => {
  const { name, email, mobile, subject, message } = req.body;

  const newUser = new User({
    name,
    email,
    mobile,
    subject,
    message
  });

  newUser.save()
    .then(() => {
      res.status(201).json({ message: 'User added successfully', user: newUser });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error saving user', error });
    });
});

app.listen(port, () => {
    console.warn('server is on 5000');
});