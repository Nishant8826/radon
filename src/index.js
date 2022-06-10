const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Nishant-R:cMVSc6ePV6V4dr03@cluster0.rembes2.mongodb.net/Nishant-Rathore", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function(req,res,next){
    let today=new Date();
    // console.log(today)
    let date=today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate()+" ";
    let time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    const dateAndTime=date + time;
    const ip=req.ip;
    const path=req.path;
    console.log(`Current Date&Time:${dateAndTime}\nIP Address==>${ip}\nPath==>${path}`);
    next();
}
);

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
