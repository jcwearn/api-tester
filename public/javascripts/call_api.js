var callAPI = function() {
  var url = $("input#api-route").val();
  var method = $("select#method").val();
  var contentType = $("select#content-type").val();
  var accept = $("select#accept").val();
  var version = $("input#version").val();
  var body = $("textarea#body").val();

  var headers = getHeaders();

  var payload = {
    "url": url,
    "method": method,
    "contentType": contentType,
    "accept": contentType,
    "version": version,
    "headers": headers,
    "body": body
  };
  
  $.ajax({
    url: "/callapi",
    type: "POST",
    data: JSON.stringify(payload),
    contentType:"application/json; charset=utf-8",
    cache: false,
    success: function(data, textStatus, jqXHR) {
      var response = JSON.stringify(JSON.parse(data.body),null,2);
      var headers = JSON.stringify(data.headers,null,2);     
      $("pre#response-area").html((response));
      $("pre#headers-area").html((headers));
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    }
  });
};

function getHeaders() {
  var keys = [];
  var values = [];
  var headers = {};
  $('[id^="key"]').each(function() {
    var key = $(this).val();
    if(key) {
      keys.push(key);
    }
  });

  $('[id^="value"]').each(function() {
    var value = $(this).val();
    if(value) {
      values.push(value);
    }
  });

  for(var i = 0; i < keys.length; i++) {
    if(keys[i] && values[i])
      headers[keys[i]] = values[i];
  }
  
  return headers;
}
