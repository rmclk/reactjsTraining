var filesystem = require('fs');//

filesystem.readFile('MainServerV4TextFile.txt', function (err, logData) { 

  if (err) throw err; 
  var text = logData.toString(); 
  var results = {}; 
  var agentDetails = text.split('\n'); 

agentDetails.forEach(function(line) { 

    var record = line.split(' '); 

 console.log("Record - ",record); 

    var agent = record[1]; 

 console.log("Letters - ",agent); 

    var count = parseInt(record[2]); 


if(!results[agent]) { 

      results[agent] = 0; 

    } 


results[agent] += parseInt(count); 

  }); 


console.log(results); 

  // { Gold-Agent: 250000, Silver-Agent: 200000, Bronze-Agent: 60000 } 

});
