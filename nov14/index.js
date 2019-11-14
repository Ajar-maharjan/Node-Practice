//common js
var http = require('http');
//console.log(http);

function callbackregister(req,res){
    //handle
    //console.log('akali')
    res.statusCode = 200;
    res.end('this is homepage');
}
//handle function

//higher order function: this take another function in header
var application = http.createServer(callbackregister);
//handle request

console.log('server is running in 3090 port');
application.listen(3090);

