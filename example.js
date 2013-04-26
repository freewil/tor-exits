var tor = require('./');
tor.fetch(function(err, data) {
  if (err) return console.error(err);
  console.log('parsing...');
  var nodes = tor.parse(data);
  console.log(nodes);
});
