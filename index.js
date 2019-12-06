const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const emailRoute = require('./routes/email')
const mongoose = require('mongoose');
const path = require('path')

var publicDir = require('path').join(__dirname, '/public');
app.use(express.static(publicDir));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/email', emailRoute )

// mongoose.connect('mongodb+srv://lohith:lohith@cluster0-9hpui.mongodb.net/test?retryWrites=true&w=majority', {
//  useNewUrlParser: true,
//  useUnifiedTopology: true
// }).then(() => {
    app.listen(5000, () => {
        console.log('app liesting at 5000 port')
    })
// })

