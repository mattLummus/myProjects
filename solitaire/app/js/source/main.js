/* jshint camelcase:false */

(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#addOption').click(addOption);
  }

  function addOption(){
    alert(';)');
    generateDeck();
  }

  function generateDeck(){
    var card = ('<div>');
    var cVal = randomCard();
    $(card).text(cVal);
    $('#burnDeck').append(card);





  }

  function randomCard(){
    var cVal = Math.round(Math.random()*32);
    var suitIndex = Math.round(Math.random()*4);
    var cID = cVal * suitIndex;
    return cID;
  }

})();
