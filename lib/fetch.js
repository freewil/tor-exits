var request = require('request');
var requestOpts = {
  uri: 'https://www.dan.me.uk/torlist/',
  strictSSL: true
};

module.exports = function fetch(cb) {
  request(requestOpts, function(err, res, body) {
    if (err) return cb(err);
    if (res.statusCode != 200) {
      return cb(new Error('Server responded with status code: ' + res.statusCode));
    }
    cb(err, body);
  });
};
