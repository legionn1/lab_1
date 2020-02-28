var http = require("http");
let moment = require("moment");

//create a server object:
http
  .createServer(function(req, res) {
    if (req.url.indexOf("name="))
      res.write(
        "Hello " +
          req.url.slice(req.url.indexOf("name=") + 5, req.url.length) +
          ", today is " +
          "  " +
          moment().format("dddd,MMM Do YY")
      );
    else res.write("Hello , today is");

    //write a response to the client
    res.end();
  })
  .listen(8080); //the server object listens on port 8080
