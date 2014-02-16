'use strict';

function Task(task){
  this.name = task.name || '';
  this.priority = parseInt(task.priority || 0);
  this.workload = parseInt(task.workload || 0);
  this.start = task.start || '';
  this.end = task.end || '';
  this.subs = task.subs || [];
}
module.exports = Task;
