(function(exports){
  'use strict';

  function RandomWordGenerator() {
    this.phrases = ['Proin ornare ligula eu tellus tempus elementum',
                    'Aenean bibendum iaculis mi, nec blandit lacus interdum vitae',
                    'Vestibulum non nibh risus, a scelerisque purus',
                    'Aliquam sed felis ligula Duis non nulla magna'];
  }

  function* quoteGenerator() {
  	while (true) {
  		yield fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
      		.then(res => res.json());
   	}
  }


  RandomWordGenerator.prototype.randomise = function () {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  };

  exports.RandomWordGenerator = RandomWordGenerator;

  exports.quoteGenerator = quoteGenerator;

})(this);
