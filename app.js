const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const messages = require('./routes/api/messages');

app.get('/', (req, res) => res.send('To World'));
app.use('/api/users', users);
app.use('/api/messages', messages);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

mongoose
    .connect(db, { useNewUrlParser: true , useUnifiedTopology: true}  )
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));
