$(".menu-icon").click(function () {
  if ($(".menu").css("width") !== "600px") {
    $(".menu").css("background-color", "black");
    $(".menu").css("border-bottom-right-radius", "50%");
    $(".menu").css("border-bottom-left-radius", "50%");
    $(".menu").css("border-top-right-radius", "50%");
    $(".menu").css("display", "block");
    // Change the color to red
    $(".company-name").css("color", "#d34848");
    $(".menu").animate(
      {
        width: "600",
        height: "500",
      },
      1000
    );
  } else {
    $(".menu").animate(
      {
        width: "80",
        height: "80",
      },
      1000,
      () => {
        $(".menu").css("background-color", "transparent");
        $(".menu").css("display", "none");
        $(".menu-name").css("display", "none");
      }
    );
  }
});
