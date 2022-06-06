const express = require('express');
const { default: mongoose } = require('mongoose');

const route = require('./routes/route.js');
const app = express();

mongoose.connect("mongodb+srv://rnishant:VoqbcUcDC5MePLZr@cluster0.rembes2.mongodb.net/Nishant-DB", {
    useNewUrlParser: true
})
.then(() => console.log('mongodb running and connected'))
.catch(err => console.log(err)) 


app.use(express.json())
app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

