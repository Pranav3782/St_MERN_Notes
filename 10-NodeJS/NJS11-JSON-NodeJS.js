const myfs=require("fs")
const bioData={
    name:"Surya",
    age:21,
    skill:"nodejs programmer"
}
console.log(bioData)

JSON.stringify(bioData)

var myData=JSON.stringify(bioData)
console.log(myData);
myfs.writeFileSync("mydatajson.json",myData,(err)=>{
    console.log("Process completed");
    
});
