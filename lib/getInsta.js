"use strict";

var request = require("request");

var getInsta = function(instaUrl, cb) {
  var url = instaUrl;
  request({
    url: instaUrl,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }

  }, function (error, response, body) {
    if (error) {
      cb(error, null);
    } else {
      var obj = {
        prev_url: url,
        body: body
      };
      cb(null, obj);
    }
  });
};

module.exports = getInsta;
