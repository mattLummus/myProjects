/* jshint unused:false */
(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#form').submit(submitTask);
    loadTasks();
  }

  function loadTasks(){
    var url = window.location.origin.replace('/3000/','4000') + '/tasks';
    $.getJSON(url, displayTasks);
  }

  function displayTasks(data){
    for(var i=0; i<data.tasks.length; i++){
      displayTask(data.tasks[i]);
    }
  }

  function displayTask(data){
    var $bubble = $('<div>');
    $bubble.attr('data-pri', data.priority);
    $bubble.addClass('bubble');
    console.log(data);
    $('#body').append($bubble);
  }

  function submitTask(){
    var data = $(this).serialize();
    var url = window.location.origin.replace('/3000/','4000') + '/tasks';
    var type = 'POST';
    var success = newTask;
    $.ajax({url:url, type:type, data:data, success:success});
    event.preventDefault();
  }

  function newTask(task){
    $('#form input').val('');
    displayTask(task);
  }

})();

