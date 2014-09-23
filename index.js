var express = require('express');
var app = express();
var moment = require('moment');
var cool = require('cool-ascii-faces');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.use("/scripts", express.static(__dirname + "/public/scripts"));
app.use("/images", express.static(__dirname + "/public/images"));
app.use("/styles", express.static(__dirname + "/public/styles"));
app.use("/views", express.static(__dirname + "/public/views"));
app.use("/fonts", express.static(__dirname + "/public/fonts"));
app.use("/vendor", express.static(__dirname + "/public/vendor"));

// This route deals enables HTML5Mode by forwarding missing files to the index.html
app.all('/*', function(req, res) {
  res.sendfile('index.html', {root: __dirname + '/public'});
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
