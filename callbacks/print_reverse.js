var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  /* Write your code here! */
  let splitStr = html.split('');
  let reverseArr = splitStr.reverse();
  let joinArr = reverseArr.join('');
  console.log(joinArr);
}

getHTML(requestOptions, printReverse);