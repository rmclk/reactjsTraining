/* for(i=0; i<10; i++)
{
	console.log('Hello ' + i);
} */

var http = require('http');
var url = require('url');

http.createServer(function(request, response) { 

  var headers = request.headers; 

  var method = request.method; 

  var urldetails = request.url;

  // Create an array to hold the data which is read 
  var pathname = url.parse(request.url,true).pathname;
  console.log("Request for " + pathname + "received. ");
  var body = []; 
  
var queryData = url.parse(request.url, true).query; 

  if (queryData.name)  

  { 

    // The user has told us their name in the GET request 

    response.end('Welcome, ' + queryData.name + ', to the Node.js revolution\n'); 

  }  

  else  

  { 

    response.end('Welcome, unidentified person, to the Node.js revolution\n'); 

  } 

  console.log("For your query you used these name details " + queryData.name);

  request.on('error', function(err) { 

    console.error(err); 

  }).on('data', function(chunk) { 

    body.push(chunk); 

  }).on('end', function() { 

    body = Buffer.concat(body).toString(); 

    // At this point, we have the headers, method, url and body, and can now 

    // do whatever we need to in order to respond to this request. 

  }); 

}).listen(8081); // Activates this server, listening on port 808




