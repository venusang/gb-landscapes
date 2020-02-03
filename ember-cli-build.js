"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      enabled: false
      // prepend: "https://gb-landscape-design.netlify.com/"
    }
  });

  app.import("vendor/jquery.min.js", {
    type: "vendor",
    prepend: true
  });
  app.import("vendor/bootstrap.min.js");
  app.import("vendor/smoothscroll.min.js");
  app.import("vendor/owl.carousel.min.js");
  app.import("vendor/isotope.pkgd.min.js");
  app.import("vendor/imagesloaded.pkgd.min.js");
  app.import("vendor/sly.min.js");

  // Slider revolution
  app.import("vendor/rev-slider/jquery.themepunch.tools.min.js");
  app.import("vendor/rev-slider/jquery.themepunch.revolution.min.js");

  // Slider revolution 5x Extensions
  app.import("vendor/rev-slider/revolution.extension.actions.min.js");
  app.import("vendor/rev-slider/revolution.extension.carousel.min.js");
  app.import("vendor/rev-slider/revolution.extension.kenburn.min.js");
  app.import("vendor/rev-slider/revolution.extension.layeranimation.min.js");
  app.import("vendor/rev-slider/revolution.extension.migration.min.js");
  app.import("vendor/rev-slider/revolution.extension.navigation.min.js");
  app.import("vendor/rev-slider/revolution.extension.parallax.min.js");
  app.import("vendor/rev-slider/revolution.extension.slideanims.min.js");
  app.import("vendor/rev-slider/revolution.extension.video.min.js");

  // Scripts
  app.import("vendor/scripts.js");
  // app.import("vendor/scripts.min.js");

  return app.toTree();
};
