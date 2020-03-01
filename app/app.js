import Application from "@ember/application";
import Resolver from "ember-resolver";
import loadInitializers from "ember-load-initializers";
import config from "./config/environment";
import $ from "jquery";

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
  constructor() {
    super(...arguments);

    let mobileDevice = false;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      $("html").addClass("mobile");
      mobileDevice = true;
    } else {
      $("html").addClass("no-mobile");
      mobileDevice = false;
    }

    $(window).resize(function() {
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

      $(".projects-gallery .js-grid-items").each(function() {
        let colWrap = $(this).width();
        let colItem = Math.floor(colWrap / 200);
        let colFixedItem = Math.floor(colWrap / colItem);
        $(this)
          .find(".js-grid-item")
          .css({ width: colWrap });
        $(this)
          .find(".js-grid-item")
          .css({ width: colFixedItem });
      });
    });
  }
}

loadInitializers(App, config.modulePrefix);
