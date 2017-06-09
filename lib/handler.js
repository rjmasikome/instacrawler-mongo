"use strict";

var getInsta = require("./getInsta");
var mongoPush = require("./mongoPush");

var handler =  function(err, res) {
  if (err) return console.log(err);

  try{

    var body = JSON.parse(res.body);
    mongoPush(body, function(e, r) {
      if (e) return console.log(e);
      console.log(r.message);
      if (r.next_url) {
        getInsta(r.next_url, handler);
      }
      else {
        return console.log("Crawl complete");
      }
    });
  }
  catch(err) {
    
    console.log(err);
    getInsta(res.prev_url, handler);
  }

};

module.exports = handler;
