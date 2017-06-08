describe('Interactive behaviour', function() {

  beforeEach(function(){
    fixture.base = 'test/fixtures';
    fixture.load('/index.html');
//    startListeners();
  });

  afterEach(function(){
    fixture.cleanup();
  });

  it('loads some text to type', function() {
    var xhr = new XMLHttpRequest;
    spyOn(xhr, 'open'); spyOn(xhr, 'send');
    xhr.response = "[\"test string\"]";
    console.log(xhr.response);
    expect(xhr.grabARonSwansonQuote()).toEqual(['test', 'string']);
  });
});
