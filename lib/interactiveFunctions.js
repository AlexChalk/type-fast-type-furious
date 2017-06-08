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

  var markWordAsTyped = function(wordsToType, index){
    document.getElementById(index).style.color='green';
    completedWords.push(wordsToType[index]);
  };

  var completedWords = [];




  exports.completedWords = completedWords;
  exports.markWordAsTyped = markWordAsTyped;
  exports.displayWords = displayWords;
  exports.formatXHRQuoteToArray = formatXHRQuoteToArray;
}(this));
