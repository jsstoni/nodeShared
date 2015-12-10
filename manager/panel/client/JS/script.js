$(function() {
  $("#admin").on("submit", function(event) {
    var url = $(this).attr("action");
    var pass = $("#login input[name='pass']").val();
    var data = {
      "daemon": "admin",
      "exec": "start",
      "pass": pass
    };
    $.ajax({
      type : "POST",
      url: url,
      data : data,
      dataType: "jsonp",
      success : function(response) {
        if (response[0].running) window.location='../../admin/';
      }
    });
    event.preventDefault();
  });
});