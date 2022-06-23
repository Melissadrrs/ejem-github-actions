
var url = require('url');

function mensaje(req, resp) {
    var parsedUrl = url.parse(req.url, true);
    var query = parsedUrl.query;
	resp.writeHead(200, {'content-type': 'text/plain'});
	resp.write(`Hola Mundo duplicaste : ${formula(query.number)}`);
	resp.end();
}

function formula(number){
 return number*2
}
module.exports = { mensaje, formula}