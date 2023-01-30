const http= require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	switch (req.url) {
		case "/":
			res.status = 200;
			res.setHeader('Content-Type', 'text/html');
			fs.createReadStream('malicious.html').pipe(res);
			break;
		case "/phish":
			res.status = 200;
			res.setHeader('Content-Type', 'text/html');
			fs.createReadStream('phish.html').pipe(res);
			break;
		default:
			res.status = 404;
			res.end('Page not found');
			break;
	}
});

server.listen('8080');

