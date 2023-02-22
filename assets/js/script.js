//sidebar js
$(".has-submenu > a").click(function () {
  $(this).toggleClass("active");
  $(this).next(".sub-menu").slideToggle();
  $(this).find(".sub-menu").toggleClass("active");
});

// line count js
const codeHeight = document.getElementById("code").offsetHeight;
const lines = Math.ceil(codeHeight / 20);
let html = "";
for (i = 1; i < lines; i++) {
  html += "<span>" + i + "</span>";
}
document.getElementById("lines").innerHTML = html;

//hover image opsn js
var $cursor = $(".cursor"),
  $cursor2 = $(".cursor-tech"),
  $overlay = $(".project-overlay"),
  $overlay2 = $(".tech-overlay");
function moveCircle(e) {
  TweenLite.to($cursor, 0.5, {
    css: {
      left: e.pageX,
      top: e.pageY,
    },
    delay: 0.05,
  });
  TweenLite.to($cursor2, 0.5, {
    css: {
      left: e.pageX,
      top: e.pageY,
    },
    delay: 0.05,
  });
}
$(".project").hover(function () {
  $(".cursor").css({
    "background-image": "url(./assets/images/about.png)",
  });
});
$(".text-1").hover(function () {
  $(".cursor-tech").css({
    "background-image": "url(./assets/images/technology/html.svg)",
  });
});
$(".text-2").hover(function () {
  $(".cursor-tech").css({
    "background-image": "url(./assets/images/technology/css.svg)",
  });
});
$(".text-3").hover(function () {
  $(".cursor-tech").css({
    "background-image": "url(./assets/images/technology/bootstrap.svg)",
  });
});
$(".text-4").hover(function () {
  $(".cursor-tech").css({
    "background-image": "url(./assets/images/technology/js.svg)",
  });
});
$(".text-5").hover(function () {
  $(".cursor-tech").css({
    "background-image": "url(./assets/images/technology/react.svg)",
  });
});
$(".text-6").hover(function () {
  $(".cursor-tech").css({
    "background-image": "url(./assets/images/technology/vue.svg)",
  });
});
$(".text-7").hover(function () {
  $(".cursor-tech").css({
    "background-image": "url(./assets/images/technology/git.svg)",
  });
});
$(".text-8").hover(function () {
  $(".cursor-tech").css({
    "background-image": "url(./assets/images/technology/bitbucket.svg)",
  });
});
$(".text-9").hover(function () {
  $(".cursor-tech").css({
    "background-image": "url(./assets/images/technology/wordpress.svg)",
  });
});
$(".text-10").hover(function () {
  $(".cursor-tech").css({
    "background-image": "url(./assets/images/technology/magento.svg)",
  });
});
var flag = false;
$($overlay).mousemove(function () {
  flag = true;
  TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
  $($overlay).on("mousemove", moveCircle);
});
$($overlay).mouseout(function () {
  flag = false;
  TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
});

$($overlay2).mousemove(function () {
  flag = true;
  TweenLite.to($cursor2, 0.3, { scale: 1, autoAlpha: 1 });
  $($overlay2).on("mousemove", moveCircle);
});
$($overlay2).mouseout(function () {
  flag = false;
  TweenLite.to($cursor2, 0.3, { scale: 0.1, autoAlpha: 0 });
});
