// Problem Statement:
// Create a Node.js program that writes a welcome message 
// into a file (welcome.txt) and then reads the file content
//  when a user hits an HTTP endpoint /read.

// http://localhost:9001/write → creates the file

// http://localhost:9001/read → reads and shows the file content


const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/read") {
    fs.readFile("welcome.txt", "utf8", (err, data) => {
      res.end(data);
    });
  } else {
    fs.writeFile("welcome.txt", "Welcome to Node.js file system demo!", () => {
      res.end("File created successfully: welcome.txt");
    });
  }
});

server.listen(9001, () => {
  console.log("Server running at http://localhost:9001");
});




