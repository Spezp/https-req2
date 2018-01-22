var https = require("https");

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

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

getAndPrintHTML(https);
