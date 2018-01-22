var getHTML = require('./https-function.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function lowerHTML(html) {
  var newString = html.toLowerCase();
  console.log(newString);
}

getHTML(requestOptions, lowerHTML);