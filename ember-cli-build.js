"use strict";
const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      enabled: false
    },

    "ember-bootstrap": {
      bootstrapVersion: 3,

      // importBootstrapTheme: false,
      importBootstrapFont: true,

      // importBootstrapCSS: true,
      // whitelist: ["bs-nav", "bs-carousel"],

      importBootstrapCSS: false
    }
  });
  app.import("vendor/smoothscroll.min.js");
  // app.import("vendor/smoothscroll.js");
  app.import("vendor/owl.carousel.min.js");
  app.import("vendor/isotope.pkgd.min.js");
  app.import("vendor/imagesloaded.pkgd.min.js");

  // Slider revolution
  app.import("vendor/rev-slider/jquery.themepunch.tools.min.js");
  app.import("vendor/rev-slider/jquery.themepunch.revolution.js");
  // app.import("vendor/rev-slider/jquery.themepunch.revolution.min.js");

  // // Slider revolution 5x Extensions
  app.import(
    "vendor/rev-slider/extensions/revolution.extension.actions.min.js"
  );
  app.import(
    "vendor/rev-slider/extensions/revolution.extension.carousel.min.js"
  );
  app.import(
    "vendor/rev-slider/extensions/revolution.extension.kenburn.min.js"
  );
  app.import(
    "vendor/rev-slider/extensions/revolution.extension.layeranimation.min.js"
  );
  app.import(
    "vendor/rev-slider/extensions/revolution.extension.migration.min.js"
  );
  app.import(
    "vendor/rev-slider/extensions/revolution.extension.navigation.min.js"
  );
  app.import(
    "vendor/rev-slider/extensions/revolution.extension.parallax.min.js"
  );
  app.import(
    "vendor/rev-slider/extensions/revolution.extension.slideanims.min.js"
  );
  app.import("vendor/rev-slider/extensions/revolution.extension.video.min.js");

  // Scripts
  // app.import("vendor/scripts.js");
  // https://github.com/viljamis/ResponsiveSlides.js
  app.import("vendor/responsiveslides.js");
  return app.toTree();
};
