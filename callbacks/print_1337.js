var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1137 (html) {

  /* Write your code here! */
  console.log(html.replace(/a/g,'4').replace(/e/g,'3').replace(/l/g,'1').replace(/o/g,'0').replace(/s/g,'5').replace(/t/g, '7').replace(/ck/g, 'x').replace(/er/g, '0r').replace(/you/g, 'j00'));
  // html.replace(/l/g,'1');
  // html.replace(/o/g,'0');
  // html.replace(/s/g,'5');
  // html.replace(/t/g, '7');
  // html.replace(/ck/g, 'x');
  // html.replace(/er/g, '0r');
  // html.replace(/you/g, 'j00');


  // console.log(html);
}

getHTML(requestOptions, print1137);