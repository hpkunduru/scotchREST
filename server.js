var express = require('express');
var	app = express();
var bodyParser = require('body-parser');

app.use(bodyParser());

var port = process.env.PORT || 3000;

var router = express.Router();

router.get('/', function(req, res) {
	res.json({'message':'yay, the api is working'});
});

app.use('/api', router);

app.listen(port);
console.log('Magic is happening on the port ' + port);

