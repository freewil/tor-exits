var fs = require('fs'),
    assert = require('assert'),
    parse = require('../lib/parse');
    
describe('tor-exits', function() {
  describe('parse()', function() {
    
    it('should parse records', function() {
      var data = fs.readFileSync(__dirname + '/exit-addresses', 'utf8');
      var nodes = parse(data);
      assert.equal(nodes.length, 25);
    });
    
  });
});
