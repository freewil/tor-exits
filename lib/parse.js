var ipRegex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

module.exports = function parse(data) {
  return data.split('\n').filter(function(value) {
    return ipRegex.test(value);
  });
};
