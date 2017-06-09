$(document).ready(function(){
  'use strict';
  var xhr = new XMLHttpRequest();
  var wordsToType = formatXHRQuoteToArray(xhr.grabARonSwansonQuote());
  var completedWords = []

  displayWords(wordsToType);

  document.getElementById('userInput').addEventListener('keypress', function(e){
    evaluateKeypress(e.which, wordsToType, completedWords, userInput);
  });

  document.getElementById('userInput').addEventListener('input', function(){
    removeInitialWhitespace(userInput);
  });
});
