function getAndPrintHTML (options) {

  /* Add your code here */
  var https = require('https');
  https.get (options, function(response) {
    var bufferedData = '';
    response.on('data', function(data){
      bufferedData += data;
      console.log(bufferedData);
    })
  })

};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

// console.log(requestOptions.host + requestOptions.path);

getAndPrintHTML(requestOptions);