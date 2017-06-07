$(document).ready(function(){
  'use strict';

  this.RandomWordGenerator = new RandomWordGenerator();

  var wordsToType = this.RandomWordGenerator.randomise().split(' ');
  wordsToType.forEach(function(word) {
    $('#paragraph').append('<span ' + 'id="' + word + '">' + word + ' </span>');
  });


  $('#userInput').keypress(function(e){
    var input = $('#userInput').val();
    var paragraph = wordsToType;
    var typedwords = input.split(' ');
    var completedWords = [];

    if (e.which == 32) {
      typedwords.forEach(function(typedword, index) {
        if (typedword === paragraph[index]) {
          $('#' + typedword).css('color','green');
          completedWords.push(typedword);
        }
      });
    }
  });
});
