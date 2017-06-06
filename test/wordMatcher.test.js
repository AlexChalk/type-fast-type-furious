describe('Paragraph', function(){

  beforeEach(function(){
    var fixture = "<div id='fixture'><p id='paragraph'>Hello world</p></div>";

    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture);
  });

  afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
  });

  it('should display the paragraph', function(){
    expect(document.getElementById('paragraph').innerHTML).toBe('Hello world');
  });

});

