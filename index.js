var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/test", function (req, res) {
  console.log("Got a GET request for /test");
  res.send({ code: 200, message: "Got a GET request from /test" });
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Server running at http://%s:%s", host, port);
});
