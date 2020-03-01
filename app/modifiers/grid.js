import { modifier } from "ember-modifier";
import $ from "jquery";

export default modifier(function grid() {
  $(".js-grid-items").each(function() {
    let colWrap = $(this).width();
    let colItem = Math.floor(colWrap / 390);
    let colFixedItem = Math.floor(colWrap / colItem);
    $(this)
      .find(".js-grid-item")
      .css({ width: colWrap });
    $(this)
      .find(".js-grid-item")
      .css({ width: colFixedItem });
  });
});
