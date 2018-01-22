var https = require("https");

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('\n' + ' Chunk Received. Length: ' + data.length + '\n');
      console.log(data.toString());
    });

    response.on('end', function() {
      console.log('Resonse stream complete.' + '\n');
    });

  });


}

getAndPrintHTMLChunks(https);

