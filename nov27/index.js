var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var authController = require("./Controllers/AuthController.js")
var userController = require("./Controllers/UserController.js")
// app.get('/hospitallist',function(req,res,next){
//     console.log(req.query);
//     res.send('req recieved');
// })
// app.listen(3001);

app.use(bodyParser.urlencoded({extended:true}));
app.post('/registration',userController.Validator,userController.UserExist,
userController.genHash,userController.Register);
app.post('/profile', upload.single('image'),userController.UploadImage);
app.delete('/users/:id',authController.verifyToken,userController.deleteuser);
app.post('/login',authController.validation,authController.passwordChecker,
authController.jwtTokenGen);
app.listen(3002);