$(document).ready(initalize);
function initalize(){
  //loadGraph();
}

/**
function loadGraph(){
  var votes = [9,2,4,2,9,9,4,0];
  topQBVote = Math.max(votes);

  for(i = 0, len=votes.length; i<length; i++){
    var temp=votes[i];
    var input=(temp-topQbVote)*-10;
    var inputID='#b'+i;
    $(inputID).css('height:', input+'px;');
  }
}
