//common js
//var http = require('http');
//console.log(http);
const express = require('express');
const app = express();

//authenticating middleware
app.get('/auth', 
function(req,res,next){
    console.log('in first middleware do something');
    next();
},
function(req,res,next){
    console.log('in second middleware do something');
    res.status(200);
    res.set({
        'Content-Type' : 'plain'
    });
    res.send('Nurse Akali');
})


//route
app.get('/',function(req,res){
//handle
console.log('True damage akali');
//json format
var x = {name: "true damage",test:'akali'};
//set
res.status(200);
res.set({'Content-Type':'application/json'});
res.json(x);
//res.send('KDA akali');
})
app.listen(3091);

/*
function callbackregister(req,res){
    //handle
    console.log('KDA akali');
    res.statusCode = 200;
    res.end('KDA akali');
}
//handle function

//higher order function: this take another function in header
var application = http.createServer(callbackregister);
//handle request

console.log('server is running in 3090 port');
application.listen(3090); */

