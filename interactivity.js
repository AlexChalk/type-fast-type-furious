$(document).ready(function(){
  'use strict';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://ron-swanson-quotes.herokuapp.com/v2/quotes', false);
  xhr.send();
  var quote = xhr.response.slice(2,-2);
  //var quote = fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes');
  //quote.then(function(data) {
  //  console.log(data);
    //console.log(Body.text());
  //});
  var wordsToType = quote.split(' ');

  this.RandomWordGenerator = new RandomWordGenerator();

  //var wordsToType = this.RandomWordGenerator.randomise().split(' ');
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
