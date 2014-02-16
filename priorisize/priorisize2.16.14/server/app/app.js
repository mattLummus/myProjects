'use strict';

var dbname = 'pri2.16.14';
var port = process.env.PORT || 4000;

var d = require('./lib/request-debug');
var express = require('express');
var home = require('./routes/home');
var users = require('./routes/users');
var tasks = require('./routes/tasks');
var app = express();

/* --- pipeline begins */
app.use(require('./lib/mongodb-connection-pool').initialize(dbname, app));
app.use(express.logger(':remote-addr -> :method :url [:status]'));
app.use(require('./lib/cors'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.get('/', d, home.index);
app.get('/users', d, users.index);
app.get('/tasks', d, tasks.index);
app.post('/users/:id', d, users.create);
app.post('/tasks/:id', d, tasks.create);
/* --- pipeline ends   */

var server = require('http').createServer(app);
server.listen(port, function(){
  console.log('Node server listening. Port: ' + port + ', Database: ' + dbname);
});

