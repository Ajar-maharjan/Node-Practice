var express = require('express');
var bodyParser = require('body-parser')
var app = express();
const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('database', 'root', 'pleiades', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

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