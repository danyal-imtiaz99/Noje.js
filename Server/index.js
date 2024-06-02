 // get npm module http to create server
 // 1 - http
 // 2 - fs

 const http = require("http");
 const fs = require("fs");

// Create server
const myServer = http.createServer((req, res) => {
    //creating log file
    const log = `${Date.now()}: ${req.url} New Request received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch(req.url){
            case "/": res.end("HomePage");
             break;
            case "/about": res.end("Hi, This is NodeJS Server");
             break;
            case "/what": res.end("Web Server built in nodejs");
                break;
            default:
                res.end("404 Not Found");
        }
    });
})
myServer.listen(8000, () => console.log("Server is listening"));