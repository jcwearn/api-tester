var callAPI = function() {
  var url = $("input#api-route").val();
  $.ajax({
    url: "/callapi",
    type: "POST",
    data: JSON.stringify({
      "url": url
    }),
    contentType:"application/json; charset=utf-8",
    cache: false,
    success: function(data, textStatus, jqXHR) {
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    }
  });
};

