(function(exports) {
  'use strict';
  XMLHttpRequest.prototype.grabARonSwansonQuote = function() {
    this.open('GET', 'http://ron-swanson-quotes.herokuapp.com/v2/quotes', false);
    this.send();
    return this.response;
  };
  var formatXHRQuoteToArray = function(xhrResponse) {
    return xhrResponse.slice(2,-2).split(' ');
  };
  var displayWords = function(wordsArray) {
    wordsArray.forEach(function(word, index) {
      document.getElementById('paragraph').insertAdjacentHTML('beforeEnd','<span ' + 'id="' + index + '">' + word + ' </span>');
    });
  };

  var markWordAsTyped = function(wordsToType, index, completedWords){
    document.getElementById(index).style.color='green';
    completedWords.push(wordsToType[index]);
  };

  var assessWord = function(word, target) {
    return word === target;
  };

  var evaluateKeypress = function(keypress, wordsToType, completedWords, userInput) {
    if (keypress === 32) {
      if (assessWord(userInput.value, wordsToType[completedWords.length])) {
        markWordAsTyped(wordsToType, completedWords.length, completedWords);
        userInput.value = '';
     // } else {
     //   markWordAsIncorrect()
      }
    }
  };
  var removeInitialWhitespace = function(userInput) {
    if (userInput.value === ' ') {
      userInput.value = '';
    }
  };


  exports.removeInitialWhitespace = removeInitialWhitespace;
  exports.evaluateKeypress = evaluateKeypress;
  exports.assessWord = assessWord;
  exports.markWordAsTyped = markWordAsTyped;
  exports.displayWords = displayWords;
  exports.formatXHRQuoteToArray = formatXHRQuoteToArray;
}(this));
