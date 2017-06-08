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
  exports.displayWords = displayWords;
  exports.formatXHRQuoteToArray = formatXHRQuoteToArray;
}(this));
