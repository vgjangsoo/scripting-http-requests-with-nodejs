function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
var https = require('https');

https.get (requestOptions, function(response) {
  response.setEncoding('utf8');
  var bufferData = '';
  response.on ('data', function(data) {
    bufferData += data +'\n';
    console.log('Chunk Received: ' + bufferData);
  })

});


}

getAndPrintHTML();