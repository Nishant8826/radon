const express = require('express');
const { default: mongoose } = require('mongoose');

const route = require('./routes/route.js');
const app = express();

mongoose.connect("mongodb+srv://nishant8826:s8QxahiPeHPHmHJG@cluster0.rembes2.mongodb.net/Nishant8826", {
    useNewUrlParser: true
})
.then(() => console.log('mongodb running and connected'))
.catch(err => console.log(err)) 

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
