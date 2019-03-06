const request = require('request');

module.exports = function proxy(host) {
  return function(req, res) {
    const url = host + req.url.replace(/^\/api/, '');
    req.pipe(request(url)).pipe(res);
  }
};