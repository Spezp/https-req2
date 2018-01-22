var https = require("https");
var reverseHTML = require("./print_reverse.js");
// var printLowerCase = require("./print_lowercase.js");
// var printUpperCase = require("print_uppercase.js");

module.exports = function getHTML (options, callback) {
  https.get(options, function (response) {

    response.setEncoding('utf8');
    var stringChunks = '';

    response.on('data', function (data) {
      stringChunks += data;
    });

    response.on('end', function() {
      callback(stringChunks);
      console.log('Response stream complete.');
    });
  });
};