"use strict";

var getInsta = require("./lib/getInsta");
var handler = require("./lib/handler");

var hashtag = process.argv[2];
var token =  process.argv[3];
var url =  `https://api.instagram.com/v1/tags/${hashtag}/media/recent?access_token=${token}`;

if (url && token) {
  getInsta(url,handler);
}
else {
  console.log("No hashtag and/or access_token provided");
  console.log("Example usage: ");
  console.log("node . <HASHTAG> <ACCESS-TOKEN>");
}
