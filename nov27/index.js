var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var dbConfig = require('./Config/DatabaseConfig.js');
// var PromiseVal = new Promise(function(resolve,reject){
// setTimeout(function (){
// resolve(10);
// },3000)
// });

// console.log(PromiseVal)
//define sequelize model
var users = dbConfig.sequelize.define( 'user',{
//attributes
id: {
    type:dbConfig.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
},
username: {
    type:dbConfig.Sequelize.TEXT,
    allowNull: false
},
password: {
    type:dbConfig.Sequelize.TEXT,
    allowNull: false
}},{
freezeTableName:true,
tableName: 'user_table_2'});

users.sync({force:false})
.then(function(result){
    console.log("table made successfully")
})
.catch(function(err){
    console.log("failed creating table")
})

// app.get('/hospitallist',function(req,res,next){
//     console.log(req.query);
//     res.send('req recieved');
// })
// app.listen(3001);

// app.use(bodyParser.urlencoded({extended:true}));
// app.post('/registration',function(req,res,next){
//     console.log(req.query);
//     res.send ('req recieved');
// })
// app.listen(3002);