describe('Timer', function() {

  beforeEach(function(){
    fixture.base = 'test/fixtures';
    fixture.load('/index.html');
  });

  afterEach(function(){
    fixture.cleanup();
  });

  describe('timer display', function() {

    beforeEach(function() {
      jasmine.clock().install();
      var baseTime = Date.now;
      jasmine.clock().mockDate(baseTime);
      startTimer();
    });

    afterEach(function() {
      jasmine.clock().uninstall();
    });

    it('starts timer upon keypress', function(){
      startTimer();
      expect(getKeyDownFired()).toEqual(true);
    });

    it('stops the timer when the sentence is completed', function() {
      startTimer();
      stopTimer();
      expect(getKeyDownFired()).toEqual(false);
    });

    it('calculates elapsed time', function(){
      jasmine.clock().tick(1100);
      expect(document.getElementById('timer').innerHTML).toEqual('1 seconds');
      jasmine.clock().tick(1100);
      expect(document.getElementById('timer').innerHTML).toEqual('2 seconds');
    });

    it('displays total time when stopped', function() {
      jasmine.clock().tick(2100);
      stopTimer();
      expect(document.getElementById('timer').innerHTML).toEqual('2.10 seconds');
      jasmine.clock().tick(2100);
      expect(document.getElementById('timer').innerHTML).toEqual('2.10 seconds');
    });

    it('displays wpm after completing sentence', function() {
      jasmine.clock().tick(4000);
      startTimer();
      stopTimer(4);
      expect(document.getElementById('wpm').innerHTML).toEqual('12.00');
    });
  });
});
