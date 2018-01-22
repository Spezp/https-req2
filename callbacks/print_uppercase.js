var getHTML = require('./https-function.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function upperHTML(html) {
  var newString = html.toUpperCase();
  console.log(newString);
}

getHTML(requestOptions, upperHTML);