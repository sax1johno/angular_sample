var express = require('express'),
	app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
	res.send("Hello, world");
});

app.get("/data", function(req, res) {
	res.status(403).send("You are not authorized to do this man");
	// res.send({"text": "Hello, world", "name": "Kurt"});
});

app.listen(8080);