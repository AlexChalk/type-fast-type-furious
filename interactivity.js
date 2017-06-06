$(document).ready(function(){
  'use strict';

  this.RandomWordGenerator = new RandomWordGenerator();

  $('#paragraph').text(this.RandomWordGenerator.randomise());

  $("#userInput").keypress(function(e){
    var textInput = $('#userInput').val();
    var textExample = "Hello world";

  if (e.which == 13 && textInput === textExample)
      $("#result").text("True");
  });

});