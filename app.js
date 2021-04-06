const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')

const http = require('http')

http.createServer((req, res) => {
        if(req.url === "/request"){
            apiCallFromRequest.callApi(function(response){
     res.write(JSON.stringify(response));
     res.end();
            });
        }

        
        
        
}).listen(3000);

console.log("service running on 3000 port....");