describe('wordMatcher', function(){

  beforeEach(function(){
    var fixture = "<div id='fixture'><p id='paragraph'>Hello world</p>" +
    '<form><input id="userInput" type="text" name="userInput" placeholder="Start Typing..."></form>' +
    "</div>";

    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture);
  });

  afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
  });

  it('should display the text', function(){
    expect(document.getElementById('paragraph').innerHTML).toBe('Hello world');
  });

  it('should display a form to take text input', function(){
    expect(document.getElementById('userInput').innerHTML).toBe('');
  })

});