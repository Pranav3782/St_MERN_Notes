const myfs=require("fs")
const data=myfs.readFileSync("CURD/myinfo.txt","utf-8")
console.log(data)