// the http module is required
var myhttps=require("http");

//our custom module 
var dt=require('./mymodule.js')

//create the http server
myhttps.createServer(function(req,res){
    //set the response header
    res.writeHead(200,{'Content-Type':'text/html'});
    //use the custom module to print the data and time
    res.write("tha date and time is "+dt.myDataTime());
    res.end();

    //server listens to the port number 7000
}).listen(7000);
