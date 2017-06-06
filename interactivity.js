$(document).ready(function(){
  'use strict';

  this.RandomWordGenerator = new RandomWordGenerator();

  $('#paragraph').text(this.RandomWordGenerator.randomise());

  $('#userInput').keypress(function(e){
    var input = $('#userInput').val();
    var paragraph = $('#paragraph').html();

  if (e.which == 13 && input === paragraph)
      $('#result').text('True');
  });

});
