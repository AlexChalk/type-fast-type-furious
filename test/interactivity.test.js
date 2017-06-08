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

  it('changes the colour of words that have been typed', function() {
    var words = ['test','words'];
    displayWords(words);
    var typeSpaceKey = document.createEvent('KeyboardEvent');
    typeSpaceKey.initKeyEvent("keypress",       // typeArg,
                   true,             // canBubbleArg,
                   true,             // cancelableArg,
                   null,             // viewArg,  Specifies UIEvent.view. This value may be null.
                   false,            // ctrlKeyArg,
                   false,            // altKeyArg,
                   false,            // shiftKeyArg,
                   false,            // metaKeyArg,
                    32,               // keyCodeArg,                                                      
                    0))
    document.getElementById('input').dispatchEvent(typeSpaceKey);
    console.log(document.getComputedStyle('0').getPropertyValue('color'));
    expect(document.getComputedStyle('0').getPropertyValue('color')).toEqual('green');

  });
});
