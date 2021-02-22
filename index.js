var toggles = document.querySelectorAll(".c-hamburger");

for (var i = toggles.length - 1; i >= 0; i--) {
  var toggle = toggles[i];
  toggleHandler(toggle);
}

function toggleHandler(toggle) {
  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    if (this.classList.contains("is-active") === true) {
      this.classList.remove("is-active");
      $(".open").removeClass("oppenned");
    } else {
      this.classList.add("is-active");
      $(".open").addClass("oppenned");
    }
  });
}
$(".sub-menu li a").click(function (event) {
  $(".open").removeClass("oppenned");
  $(".c-hamburger").removeClass("is-active");
});

$(".services").click(function (event) {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#services").offset().top,
    },
    2000
  );
});

$(".works").click(function (event) {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#works").offset().top,
    },
    2000
  );
});

$(".clients").click(function (event) {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#clients").offset().top,
    },
    2000
  );
});

$(".contact").click(function (event) {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#contact").offset().top,
    },
    2000
  );
});
