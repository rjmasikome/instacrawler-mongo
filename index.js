"use strict";

var getInsta = require("./lib/getInsta");
var handler = require("./lib/handler");

try {
  var hashtag = process.argv[2] || "blahblahblahblahhhh" || "kotamanado";
  var token =  process.argv[3] || "300415773.ba4c844.8794e0a44e7c4bba8fe559dd995737c0";
  var url =  `https://api.instagram.com/v1/tags/${hashtag}/media/recent?access_token=${token}`;

  getInsta(url,handler);
}
catch(err) {
  console.log("No hashtag and/or access_token provided");
  console.log("Example usage: ");
  console.log("node . <HASHTAG> <ACCESS-TOKEN>");
}
