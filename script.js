var btn_subir = $(".back2top");

$(document).ready(function () {
  var myposition = $(this).scrollTop();
  if (myposition >= 100) {
    btn_subir.fadeIn();
  } else {
    btn_subir.fadeOut();
  }
});

$(window).scroll(function () {
  var myposition = $(this).scrollTop();

  if (myposition >= 100) {
    btn_subir.fadeIn();
  } else {
    btn_subir.fadeOut();
  }
});

btn_subir.click(function () {
  $("html,body").animate({ scrollTop: 0 }, 500);
});
