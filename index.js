var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/test", function (req, res) {
  console.log("Got a GET request for /test");
  res.send({ code: 200, message: "Got a GET request from /test" });
});

app.get("/jenkins", function (req, res) {
  console.log("Got a GET request for /jenkins");
  res.send({ code: 200, message: "GET from jenkins" });
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Server running at http://%s:%s", host, port);
});
