document.addEventListener("DOMContentLoaded", function() {
  $(".btn-burger").on("click", function(event) {
    if ($(this).is(event.target)) {
      $(".mobile").fadeOut("slow");
      $(this)
        .find("span")
        .removeClass("active");
    } else {
      $(".mobile").fadeIn("slow");
      $(this)
        .find("span")
        .addClass("active");
    }
  });
  var pageHeight = $(".wrapper").height();
  $(window).scroll(function() {
    if ($(window).scrollTop() > pageHeight / 2) {
      $("#up").fadeIn("slow");
    } else {
      $("#up").fadeOut("slow");
    }
  });
  $("#up").on("click", function() {
    $(window).scrollTop(0);
  });
});
