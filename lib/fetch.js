var fs = require('fs'),
    path = require('path'),
    request = require('request');

var opts = {
  uri: 'https://torstatus.blutmagie.de/ip_list_exit.php/Tor_ip_list_EXIT.csv',
  strictSSL: true
};

module.exports = function fetch(cb) {
  request(opts, function(err, res, body) {
    if (err) return cb(err);
    if (res.statusCode != 200) {
      return cb(new Error('Server responded with status code: ' + res.statusCode));
    }
    cb(null, body);
  });
};
