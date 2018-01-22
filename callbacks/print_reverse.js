var getHTML = require('./https-function.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverseHTML(html) {
  var newString = html.split('').reverse().join('');
  console.log(newString);
}

getHTML(requestOptions, reverseHTML);