const http = require('http');
const path = require('path');

const homepage = `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>My Harmless Website</title>
	</head>
	<body>
		<h1>My Harmless Website</h1>
		<a
				href="http://localhost:8080/"
				target="_blank"
				rel="opener">
			I am a link! Click me! Don't worry, I'm completely safe!
		</a>
	</body>
</html>`

const server = http.createServer((req, res) => {
	switch (req.url) {
		case "/":
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.end(homepage);
			break;
		default:
			res.statusCode = 404;
			res.end('Page not found');
			break;
	}
});

server.listen('3000');

