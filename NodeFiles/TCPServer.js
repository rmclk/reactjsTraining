require('net').createServer(function(socket)  

{ 

 // Setup a new connection 

 socket.on('data', function(data)  

 { 

 // Data has now been retrieved 

 }); 


 socket.on('end', function(data)  

 { 

 // Connection is now closed and the server is not bound to any port 

 }); 


 socket.write('We have set up a simple TCP server'); 

}).listen(8081);
