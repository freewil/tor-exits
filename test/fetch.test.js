var assert = require('assert'),
    fetch = require('../lib/fetch');

describe ('tor-exits', function() {
  describe('fetch()', function() {
    
    it('should fetch records', function(done) {
      fetch(function(err, data) {
        assert.ifError(err);
        assert.ok(data);
        done();
      });
    });
    
  });
});
