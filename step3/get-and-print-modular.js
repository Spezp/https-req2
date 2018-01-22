var https = require("https");

function getAndPrintHTML (options) {

  var requestOptions = options;

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');
    var stringChunks = '';

    response.on('data', function (data) {
      stringChunks += data;
    });

    response.on('end', function() {
      console.log(stringChunks);
      console.log('Resonse stream complete.');
    });

  });

}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
