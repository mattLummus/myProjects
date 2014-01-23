/* jshint camelcase:false */

(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(addTask);

  }

  function addTask(){
    var newBubble = $('<div>');
    var name = $('#textName').val();
    var color = bubbleColor();
    var size = bubbleSize();
    newBubble.text(name);
    newBubble.addClass('bubble');
    newBubble.css('background-color', color);
    newBubble.css('height', size);
    newBubble.css('width', size);
    $('#container').append(newBubble);
  }

  function bubbleColor(){
    var count = 0;
    var color = '';
    var days = $('#textDays').val();
    var priority = $('#textPriority').val();
    switch (priority){
      case 'high':
        count += 3;
        break;
      case 'med':
        count += 2;
        break;
      case 'low':
        count += 1;
        break;
      default:
    }
    var rating = days/count;
    if(rating>5){
      color='green';
    }
    else if(rating<3){
      color='red';
    }
    else{
      color='yellow';
    }
    return color;
  }

  function bubbleSize(){
    var workload = $('#textWorkload').val();
    var size = '';
    switch (workload){
      case 'high':
        size = '300px';
        break;
      case 'med':
        size = '200px';
        break;
      case 'low':
        size = '100px';
        break;
      default:
    }
    return size;
  }

})();
