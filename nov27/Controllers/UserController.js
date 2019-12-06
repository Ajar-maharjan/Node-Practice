var bcrypt = require('bcryptjs');
var users = require('../Models/UserModel.js');
function Validator (req,res,next){
    console.log(req.body);
    // res.send ('req recieved');
    if(req.body.username === ''){
        res.json({status:404,message:'username is required'})
    }
    else if (req.body.password === ''){
        res.json({status:404,message: 'password is required'})
    }
    else{
        next();
    }
}

function genHash(req,res,next){
    var saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds,function (err, hash)
    {
        if(hash){
            req.hashKey = hash;
            next();
        }
        if(err){
            res.json(err);
        }
    });  
}
function Register(req,res,next){
    users.create({
        username:req.body.username,
        password:req.hashKey
    })
    .then(function(result){
        console.log(result);
        res.json({status:200,message:'registered successfully'});
        next();
    }).catch(function(err){
        res.json(err);
    })
}


module.exports = {
    Validator,genHash,Register
}