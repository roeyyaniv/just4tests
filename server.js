var express = require('express');
var webApp = express();

webApp.get('/', function (req, res) {
	console.log("webapp hit. Responding.");
    res.send('<h1>Welcome to my world</h1><br/><H3>A product by <i>Roey Yaniv</i></H3');
});

webApp.listen(3000, function () {
  console.log('webApp listening on port 3000');
});