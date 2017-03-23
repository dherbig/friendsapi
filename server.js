var express = require('express');
var friendsAPI = express();
var path = require('path');
var bp = require('body-parser');
// var session = require('express-session')
friendsAPI.use(bp.json());
friendsAPI.use(express.static(path.join(__dirname + "/client")));
friendsAPI.use(express.static(path.join(__dirname + "/bower_components")));
// friendsAPI.use(session({
//     secret: "Darth Mario",
//     resave: true,
//     saveUninitialized: true,
//     cookie: { secure: false }
// }))

require('./server/config/mongoose.js');
require('./server/config/routes.js')(friendsAPI);

friendsAPI.listen(8000, function(){
    console.log*'listening on 8k';
})