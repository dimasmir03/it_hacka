var PORT = process.env.PORT || 5000;
var express = require("express");
var app = express();
var server = require("http").createServer(app);
//var io = require("socket.io")(server);

server.listen("9090", "localhost", () => {
  console.log("Сервер запущен") 
})

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/src/main/main.html")
})
app.get("/main.js", (req, res) => {
  res.sendFile(__dirname + "/src/main/main.js")
})
app.get("/jquery.js", (req, res) => {
  res.sendFile(__dirname + "/src/jquery.js")
})
app.get("/send_data.js", (req, res) => {
  res.sendFile(__dirname + "/src/main/send_data.js")
})
app.get("/employer", (req, res) => {
  
})

