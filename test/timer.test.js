describe('Timer', function() {

  beforeEach(function(){
    fixture.base = 'test/fixtures';
    fixture.load('/index.html');
    startListeners();
  });

  afterEach(function(){
    fixture.cleanup();
  });

  it('has a start button that sets starting time', function() {
    spyOn(Date, 'now').and.returnValue('perfect');
    document.getElementById('start').click();
    expect(timer.startTime).toEqual('perfect');
  });

  it('has a stop button that sets end time', function() {
    spyOn(Date, 'now').and.returnValue('swish');
    document.getElementById('stop').click();
    expect(timer.stopTime).toEqual('swish');
  });

  describe('timer display', function() {
    beforeEach(function() {
      jasmine.clock().install();
      var baseTime = Date.now;
      jasmine.clock().mockDate(baseTime);
      $('#userInput').keypress(function(){});
    });
    afterEach(function() {
      jasmine.clock().uninstall();
    });

    it('calculates elapsed time', function(){
      jasmine.clock().tick(1100);
      expect(document.getElementById('timer').innerHTML).toEqual('1 seconds');
      jasmine.clock().tick(1100);
      expect(document.getElementById('timer').innerHTML).toEqual('2 seconds');
    });

    it('displays total time when stopped', function() {
      jasmine.clock().tick(2100);
      document.getElementById('stop').click();
      expect(document.getElementById('timer').innerHTML).toEqual('2.10 seconds');
      jasmine.clock().tick(2100);
      expect(document.getElementById('timer').innerHTML).toEqual('2.10 seconds');
    });
  });
});
