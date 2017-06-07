$(document).ready(function(){
  'use strict';

  this.RandomWordGenerator = new RandomWordGenerator();

  $('#paragraph').text(this.RandomWordGenerator.randomise());

  $('#userInput').keypress(function(e){
    var input = $('#userInput').val();
    var paragraph = $('#paragraph').html();
    var words = paragraph.split(' ');
    var typedwords = input.split(' ');
    var completedWords = [];

    if (e.which == 32) {
      typedwords.forEach(function(typedword, index) {
        if (typedword === words[index]) {
          completedWords.push(typedword)
        }
      });
      $("#result").text(completedWords.join(" ")).css("color","green")
    }

  });

});
