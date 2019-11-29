var express = require('express');
var bodyParser = require('body-parser')
var app = express();

// app.get('/hospitallist',function(req,res,next){
//     console.log(req.query);
//     res.send('req recieved');
// })
// app.listen(3001);

app.use(bodyParser.urlencoded({extended:true}));
app.post('/registration',function(req,res,next){
    console.log(req.query);
    res.send ('req recieved');
})
app.listen(3002);