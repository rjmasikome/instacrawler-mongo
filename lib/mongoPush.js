"use strict";

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

module.exports = function (res, cb) {

  MongoClient.connect(process.env['DB_PATH'] || "mongodb://localhost:27017/instacrawl", function (err, db) {

    if (err) return cb(err, null);
    var Media = db.collection("media");

    if(res.data.length == 0) return cb(null, "There is no data");

    res.data.forEach(function(n) {
      n._id = n.id;
      delete n.id;
    });
    Media.insertMany(res.data, function(e, r) {
      assert.equal(null, e);
      assert.equal(res.data.length, r.insertedCount);

      var obj = {
        message : `Push ${res.data.length} data from ${res.pagination.min_tag_id}`,
        next_url : res.pagination.next_url || null
      }
      db.close();
      cb(null, obj);
    });
  });
}
