module.exports = function getHTML (options, callback) {
    /* Your code here */
    const https = require('https');

    https.get(options, function(response) {
      var bufferedData = '';

      response.setEncoding('utf8');
      response.on('data', function(data) {
        bufferedData += data;
      })
      response.on('end', function() {
        callback(bufferedData);
      })

    })

};


