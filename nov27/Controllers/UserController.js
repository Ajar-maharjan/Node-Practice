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
        res.json({status:200,message:'registered successfully'})
    }
}
function passwordCheck(){
    
}
function register(){
    
}


module.exports = {
    Validator,passwordCheck,register
}