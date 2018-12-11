/* for(i=0; i<10; i++)
{
	console.log('Hello ' + i);
} */

var http = require('http');

var server = http.createServer(function(request, response){
	//send http header
	response.writeHead(200, {'Content-Type':'text/html'});
	response.write("<html>");
	response.write("<head>");
	response.write('<title>Hello Gerry Byrne </title> \n');
	response.write('</head>');
	response.write('<body>');
	response.write('Hello Gerry Byrne - HTML Code');
	response.write('</body>');
	response.write('</html>');
	response.end();	
	
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');



