'use strict';

function User(user){
  this.name = user.name || '';
  this.email = user.email || '';
  this.tasks = user.tasks || [];
}

module.exports = User;
