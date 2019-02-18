const request = require('request');

module.exports = function proxy(host) {
  return function(req, res) {
    const url = host + req.url.replace(/^\/api/, '');
    console.log(url)
    req.pipe(request(url)).pipe(res);
  }
};