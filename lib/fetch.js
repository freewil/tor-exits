var request = require('request');
var URL = 'https://exitlist.torproject.org/exit-addresses';

module.exports = function fetch(cb) {
  request(URL, function(err, res, body) {
    cb(err, body);
  });
};
