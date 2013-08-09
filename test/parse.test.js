var fs = require('fs'),
    assert = require('assert'),
    parse = require('../lib/parse');
    
describe('tor-exits', function() {
  describe('parse()', function() {
    
    it('should parse records', function() {
      var ipRegex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
      var data = fs.readFileSync(__dirname + '/torlist', 'utf8');
      var nodes = parse(data);
      assert.equal(nodes.length, 100);
      for (var i = 0; i < nodes.length; ++i) {
        assert.ok(ipRegex.test(nodes[0]));
      }
    });
    
  });
});
