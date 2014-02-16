/* global test:false, deepEqual:false, ok:false, User:false, Task:false */

'use strict';

//USER
test('User#new', function() {
  var u1 = new User('name');

  ok(u1 instanceof User, 'u1 should be an instance of User');
});


//TASK
test('Task#new', function() {
  var t1 = new Task('task');

  ok(t1 instanceof Task, 't1 should be an instance of Task');
});

test('Task#properties', function(){
  var t1 = new Task('task1', 'large', 'high', [2,1,14], [3,1,14]);

  deepEqual(t1.name, 'task1', 't1 should be named task1');
  deepEqual(t1.size, 'large', 't1 should be large');
  deepEqual(t1.prio, 'high', 't1 should have a high priority');
  deepEqual(t1.start, '2/1/14', 't1 should start ');
  deepEqual(t1.end, '3/1/14', 't1 should end ');
});
