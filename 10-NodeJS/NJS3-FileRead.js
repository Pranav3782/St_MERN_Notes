
const myfs=require("fs")

const buf=myfs.readFileSync("data.txt");
console.log(buf);

const read=buf.toString();
console.log(read);
