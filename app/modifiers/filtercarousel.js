import { modifier } from "ember-modifier";
import $ from "jquery";

export default modifier(function filter() {
  $(".js-filter-carousel li a").on("click", function() {
    $(".js-filter-carousel .active").removeClass("active");
    $(this)
      .closest("li")
      .addClass("active");
    var selector = $(this).attr("data-filter");
    $(".project-carousel").fadeOut(300);
    $(".project-carousel").fadeIn(300);
    setTimeout(function() {
      $(".project-carousel .owl-item").hide();
      $(selector)
        .closest(".project-carousel .owl-item")
        .show();
    }, 300);
    return false;
  });
});
