//File system module
const myfs=require("fs")

myfs.writeFileSync("data11.txt","This is the data");
//replaces the data
myfs.writeFileSync("data11.txt","Welcome to nodejs");