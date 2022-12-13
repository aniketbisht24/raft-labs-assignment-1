const express = require('express')
const routes = require('./routes')
const app = express();

const server = app.listen(3000);

try{
    console.log("hheelo")
    app.use('/', routes)
}
catch(err){
    server.close();
}