var request = require('request');

var APIController = function() {};


APIController.prototype.callAPI = function(url, method, headers, body, callback) {
  var request_params = {
    "method": method,
    "url": url,
    "headers": headers
  };

  if(body) {
    request_params.body = body;
  }

  request(request_params, function(error, response, body) {
    if (error) {
      
    } else if(response.statusCode === 200) {
      
    } else {
      
    }
  });
};

module.exports = APIController;
