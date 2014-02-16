/* jshint unused:false */
'use strict';

var User = require('../models/user');
var mongodb = require('mongodb');
var assert = require('assert');

exports.create = function(req,res){
  var db = req.app.locals.db;
  var users = db.collection('users');
  var user = new User(req.body);
  users.insert(user, function(err, records){
    res.send(records[0]);
  });
};

exports.index = function(req,res){
  var db = req.app.locals.db;
  var users = db.collection('users');
  users.find().toArray(function(err, users){
    res.send({users:users});
  });
};
