var express = require("express");
var app = express();

app.get("/elements", function(req, res) {
  res.send([{
      AtomicNumber: "1", 
      Symbol: "H", 
      Name: "Hydrogen",
      AtomicWeight: "1.008",
      Group: "1"
    }]);
});

app.listen(3000);