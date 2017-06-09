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

  describe('', function() {
  var words;
  var completedWords;
    beforeEach(function() {
      words = ['test','words'];
      completedWords = [];
      displayWords(words);
    });
    afterEach(function() {
      completedWords = [];
    });
    it('creates html span tags with ids for each word', function() {
      expect(document.getElementById('paragraph').innerHTML).toEqual('<span id="0">test </span><span id="1">words </span>');
    });

    it('markWordAsTyped changes the colour of words', function() {
      markWordAsTyped(words, 0, completedWords);
      expect(document.getElementById('0').style.color).toEqual('green');
    });

    it('markWordAsTyped adds word to completedWords array', function() {
      markWordAsTyped(words, 0, completedWords);
      expect(completedWords).toContain('test');
    });
    it('assessWords checks two words match', function() {
      expect(assessWord('test','test')).toBe(true);
      expect(assessWord('test','stetst')).toBe(false);
    });
    it('assessWord is called with correct words if keypress is space', function() {
      assessWord = jasmine.createSpy('assessWord');
//      spyOn(window, 'assessWord');
      var userInput = document.getElementById('userInput');
      userInput.value = 'test';
      evaluateKeypress(32, words, completedWords, userInput);
      expect(assessWord).toHaveBeenCalledWith('test', 'test');
    });

  });

});
