(function(exports) {
  'use strict';
  XMLHttpRequest.prototype.grabARonSwansonQuote = function() {
    this.open('GET', 'http://ron-swanson-quotes.herokuapp.com/v2/quotes', false);
    this.send();
    return this.response.slice(2,-2).split(' ');
  };

}(this));
