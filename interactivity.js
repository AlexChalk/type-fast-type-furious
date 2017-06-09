$(document).ready(function(){
  'use strict';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://ron-swanson-quotes.herokuapp.com/v2/quotes', false);
  xhr.send();
  var quote = xhr.response.slice(2,-2);
  var wordsToType = quote.split(' ');

  wordsToType.forEach(function(word, index) {
    $('#paragraph').append('<span ' + 'id="' + index + '">' + word + ' </span>');
  });

  $('#userInput').keypress(function(e){
    var input = $('#userInput').val();
    var paragraph = wordsToType;
    var typedwords = input.split(' ');
    var completedWords = [];

    if (e.which == 32) {
      typedwords.forEach(function(typedword, index) {
        if (typedword === paragraph[index]) {
          $('#' + index).css('color','green');
          completedWords.push(typedword);
        }
        if (completedWords.length === wordsToType.length) {
          stopTimer(completedWords.length);
        }
      });
    }
  });
});
