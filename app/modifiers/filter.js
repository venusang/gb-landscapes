import { modifier } from "ember-modifier";
import $ from "jquery";

export default modifier(function filter() {
  $(".js-filter li a").on("click", function() {
    $(".js-filter .active").removeClass("active");
    $(this)
      .closest("li")
      .addClass("active");
    var selector = $(this).attr("data-filter");
    $(".js-isotope").isotope({
      filter: selector,
      animationOptions: {
        duration: 500,
        queue: false
      }
    });
    return false;
  });
});
