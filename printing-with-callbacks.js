function getHTML (options, callback) {

  /* Add your code here */
  var https = require('https');

  https.get(options, function(response) {
    var buffedData = '';
    response.setEncoding('utf8');
    response.on('data', function(data) {
      buffedData += data;
    })
    response.on('end', function() {
      callback(buffedData);
    })
  })

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);