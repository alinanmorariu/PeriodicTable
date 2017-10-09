var express = require("express");
var app = express();

app.get("/elements", function(req, res) {
  var elements = [{
      AtomicNumber: "1", 
      Symbol: "H", 
      Name: "Hydrogen",
      AtomicWeight: "1.008",
      Group: "1"
    }];

  res.send(200, elements);
});

app.listen(3000);