/* jshint unused:false */
var Task = (function(){
  'use strict';
  function Task(name, size, prio, start, end){
    this.name = name || 'Name not Defined';
    this.size = size || 'Size not Defined';
    this.size = prio || 'Priority not Defined';
    
    var tempSA = start;
    var tempEA = end;
    var s0 = tempSA[0];
    var s1 = tempSA[1];
    var s2 = tempSA[2];
    this.start = (s0 +'/'+ s1 +'/'+ s2);
    var e0 = tempEA[0];
    var e1 = tempEA[1];
    var e2 = tempEA[2];
    this.end = (e0 +'/'+ e1 +'/'+ e2);
  }
  return Task;
})();
