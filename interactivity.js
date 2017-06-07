$(document).ready(function(){
  'use strict';

  this.RandomWordGenerator = new RandomWordGenerator();

  $('#paragraph').text(this.RandomWordGenerator.randomise());

  $('#userInput').keypress(function(e){
    var input = $('#userInput').val();
    var paragraph = $('#paragraph').html();
    var words = paragraph.split(' ');
    var typedwords = input.split(' ');

    if (e.which == 32) {
      typedwords.forEach(function(typedword, index) {
        if (typedword === words[index]) {
          console.log(typedword);
          console.log(words[index]);
          $('#paragraph').css('color', 'green')
        }
      });
        $('#result').text('True');
    }

  });

});
