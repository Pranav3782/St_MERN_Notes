const myhttps=require("http");

const myserver=myhttps.createServer((req,res)=>{
    res.end("HEllo the server is running ");
})

myserver.listen(7000,"127.0.0.1",()=>{
    console.log("Hello from the server is running in 7000")

})
