describe('Interactive behaviour', function() {

  beforeEach(function(){
    fixture.base = 'test/fixtures';
    fixture.load('/index.html');
  });

  afterEach(function(){
    fixture.cleanup();
  });

  it('formats strings from API response', function() {
    var response =  '["test string"]';
    expect(formatXHRQuoteToArray(response)).toEqual(['test', 'string']);
  });

  it('removeCurlyQuotes replaces curly quotes with straight quotes in a string', function() {
    expect('‘’“”‘’“”'.removeCurlyQuotes()).toEqual('\'\'""\'\'""');
  });

  describe('type assessment', function() {
    var words;
    var completedWords;
    var userInput;
    beforeEach(function() {
      words = ['test','words'];
      completedWords = [];
      displayWords(words);
      userInput = document.getElementById('userInput');
    });
    afterEach(function() {
      completedWords = [];
    });
    it('creates html span tags with ids for each word', function() {
      expect(document.getElementById('paragraph').innerHTML).toEqual('<span id="0">test </span><span id="1">words </span>');
    });

    it('markWordAsTyped changes the colour of words to green', function() {
      markWordAsTyped(words, completedWords);
      expect(document.getElementById('0').style.color).toEqual('green');
    });

    it('markWordAsIncorrect changes the colour of words to red', function() {
      markWordAsIncorrect(words, completedWords);
      expect(document.getElementById('0').style.color).toEqual('red');
    });

    it('markWordAsTyped adds word to completedWords array', function() {
      markWordAsTyped(words, completedWords);
      expect(completedWords).toContain('test');
    });

    it('assessWords checks two words match', function() {
      expect(assessWord('test','test')).toBe(true);
      expect(assessWord('test','stetst')).toBe(false);
    });

    it('input is cleared if keypress is space and word matches', function() {
      userInput.value = 'test';
      evaluateKeypress(32, words, completedWords, userInput);
      expect(userInput.value).toEqual('');
    });

    it('input is not cleared if keypress is space and word does not match', function() {
      userInput.value = 'wronglytypedtest';
      evaluateKeypress(32, words, completedWords, userInput);
      expect(userInput.value).toEqual('wronglytypedtest');
    });
  });
});
