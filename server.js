const express = require('express')
const path = require('path')
const routes = require('./routes')

require('dotenv').config()

require('./database');

const port = process.env.PORT || 3000;

const app = express();

try{
    app.use(express.json());
    app.use(express.urlencoded({extended: false}))
    
    app.use(express.static(path.join(__dirname, 'views')))
    
    app.listen(port)

    app.use('/', routes)
}
catch(err){
    app.close()
}

module.exports = app
