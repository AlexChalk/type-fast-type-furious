describe('Interactive behaviour', function() {

  beforeEach(function(){
    fixture.base = 'test/fixtures';
    fixture.load('/index.html');
  });

  afterEach(function(){
    fixture.cleanup();
  });

  it('formats strings from API response', function() {
    var response =  "[\"test string\"]";
    expect(formatXHRQuoteToArray(response)).toEqual(['test', 'string']);
  });

  it('creates html span tags with ids for each word', function() {
    var words = ['test','words'];
    displayWords(words);
    expect(document.getElementById('paragraph').innerHTML).toEqual('<span id="0">test </span><span id="1">words </span>');
  });

  it('markWordAsTyped changes the colour of words', function() {
    var words = ['test','words'];
    displayWords(words);
    markWordAsTyped(words, 0);
    expect(document.getElementById('0').style.color).toEqual('green');
  });

  it('markWordAsTyped adds word to completedWords array', function() {
    var words = ['test','words'];
    displayWords(words);
    markWordAsTyped(words, 0);
    expect(completedWords).toContain('test');
  });
  it('assessWords iterates over typedWords array', function() {
    var words = ['test','words'];
    displayWords(words);
    assessWords(words);
    expect(completedWords).toContain('test');
    expect(completedWords).toContain('words');
  });
});
