(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    var wordsToType = formatXHRQuoteToArray(xhr.grabARonSwansonQuote());
    var completedWords = [];

    displayWords(wordsToType);

    document.getElementById('userInput').addEventListener('keydown', function(){
      startTimer();
    });

    document.getElementById('userInput').addEventListener('keypress', function(e){
      evaluateKeypress(e.which, wordsToType, completedWords, userInput);
    });

    document.getElementById('userInput').addEventListener('input', function(){
      removeInitialWhitespace(userInput);
    });
  });
}());
