var client = require('./connection.js');

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});

client.count({index: 'docker-compose',type: '_doc'},function(err,resp,status) {
  console.log("fscrawler",resp);
});