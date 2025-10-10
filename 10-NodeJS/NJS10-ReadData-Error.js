const myfs=require("fs")
const data=myfs.readFileSync("CURD/myinfo1.txt","utf-8")
console.log(data);


myfs.readFile("CURD/myinfo.txt","utf-8",(err,data)=>{
    console.log(data)
    console.log(err);
});
