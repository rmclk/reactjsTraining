var fs = require('fs'); 

var path = "Test.txt"; 


// Use the fs.open() function to open the file 

// We pass two values into the function and use them as required 

fs.open(path, 'a', function opened(err, fd)  

 { 

 if (err)  

 {  

 throw err  

 }     

  var writeBuffer = new Buffer(' - writing this string'), 

  bufferPosition = 0, 

  bufferLength = writeBuffer.length, filePosition = null; 

  fs.write( fd,writeBuffer,bufferPosition,bufferLength,filePosition, 

  function wrote(err, written)  

  { 

   if (err)  

   {  

    throw err;  

   } 

  console.log('wrote ' + written + ' bytes'); 

  }); 

}); 
