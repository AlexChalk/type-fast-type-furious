$(document).ready(function(){
  'use strict';
  var xhr = new XMLHttpRequest();
  var wordsToType = formatXHRQuoteToArray(xhr.grabARonSwansonQuote());

  displayWords(wordsToType);

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
      });
    }
  });
});
