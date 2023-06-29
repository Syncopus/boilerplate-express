let express = require('express');
let app = express();
function handleRequest(req, res) {
  res.sendFile(__dirname + '/views/index.html')
}
app.use("/public", express.static(__dirname + "/public"));
app.get('/', handleRequest);





































 module.exports = app;
