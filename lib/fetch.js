var request = require('request');
var URL = 'https://exitlist.torproject.org/exit-addresses';

module.exports = function fetch(cb) {
  request(URL, function(err, res, body) {
    if (res.statusCode != 200) {
      return cb(new Error('Server responded with status code: ' + res.statusCode));
    }
    cb(err, body);
  });
};
