var fs = require('fs'),
    path = require('path'),
    request = require('request');

// get options for request module - retrieves ca on first call
// and caches it for subsequent calls
var getRequestOpts = (function() {
  var opts = {
    uri: 'https://torstatus.blutmagie.de/ip_list_exit.php/Tor_ip_list_EXIT.csv',
    strictSSL: true,
    ca: null
  };
  return function(cb) {
    if (opts.ca) return process.nextTick(function() { cb(null, opts) });
    var filename = path.join(__dirname, '..', 'torstatus.blutmagie.de.pem');
    var readOpts = { encoding: 'utf8' };
    fs.readFile(filename, readOpts, function(err, data) {
      if (err) return cb(err);
      opts.ca = data;
      cb(null, opts);
    });
  };
})();

module.exports = function fetch(cb) {
  getRequestOpts(function(err, opts) {
    if (err) return cb(err);
    request(opts, function(err, res, body) {
      if (err) return cb(err);
      if (res.statusCode != 200) {
        return cb(new Error('Server responded with status code: ' + res.statusCode));
      }
      cb(err, body);
    });
  });
};
