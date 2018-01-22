var https = require("https");
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