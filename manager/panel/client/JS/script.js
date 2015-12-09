$(function() {
  $("#login").on("submit", function(event) {
    var url = $(this).attr("action");
    var data = $(this).serialize();
    $.ajax({
      type : "POST",
      url: url,
      data : data,
      dataType: 'jsonp',
      success:function(data) {
        console.log(data);
      }
    });
  });
});