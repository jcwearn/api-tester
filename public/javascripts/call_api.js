var callAPI = function() {
  var url = $("input#api-route").val();
  var method = $("select#method").val();
  var contentType = $("select#content-type").val();
  var accept = $("select#accept").val();
  var version = $("input#version").val();
  var headers = $("input#headers").val();
  var body = $("textarea#body").val();

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
      console.log(data);
      var response = JSON.stringify(JSON.parse(data),null,2);
      $("pre#response-area").html((response));
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    }
  });
}
