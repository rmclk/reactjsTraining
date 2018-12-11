var net = require('net'); 
var activeConnections = [];
var server = net.createServer(); 

 server.on('error', function(err)  
 {   
 console.log('Server error:', err.message);  
 }); 

 server.on('close', function()  
 {   
 console.log('Server closed');  
 }); 
 
 server.on('connection', function(socket)  
 {   
  console.log('New connection made');  
  activeConnections.push(socket);  
  
  socket.on('data', function(data)  
  {     
   console.log('Receiving data from the connection: ', data);     
   activeConnections.forEach(function(otherSocket)  
   {       
    if (otherSocket !== socket)  
     {         
      otherSocket.write(data); 
     }     
   }); 
  });  
  
 socket.on('close', function()  
   {     
    console.log('A connection has been closed');     
    var index = sockets.indexOf(socket);     
    sockets.splice(index, 1);  
    });
 });
  

server.listen(8081);
