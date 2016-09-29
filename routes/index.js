var express = require('express');
var path = require('path');
var APIController = require('../controllers/api_controller.js');
var router = express.Router();

router.get('/', function(req, res, next) {
  var index = path.join(__dirname, "../", "views/index.html");
  res.sendFile(index);
});

router.post('/callapi', function(req, res, next) {
  var statusCode = 500;
  var response;
  if(req.body) {
    if (req.body.url && req.body.method) {
      var url = req.body.url;
      var method = req.body.method;
      var headers = req.body.headers;
      var body = req.body.body;
      APIController.callAPI(url, method, function(err, data) {
        if (err) {
          console.log(err);
          response = err.text;
        } else if (data) {
          statusCode = 200;
          response = data;
        } else {
          statusCode = 400;
          response = "No response from API!";
        }
      });
    }
  } else {
    statusCode = 400;
    response = "Missing API URL or request Method Type!";
  }

  res.status(statusCode).send(response);
});

module.exports = router;
