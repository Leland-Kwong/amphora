'use strict';

module.exports = function () {
  var req = {};
  req.baseUrl = '';
  req.url = '/someUrl';
  req.vhost = {hostname: ''};
  req.query = {};
  return req;
};