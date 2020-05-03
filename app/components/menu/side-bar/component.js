import Component from "@glimmer/component";
import { action } from "@ember/object";

import $ from "jquery";

export default class SideBarComponent extends Component {
  @action
  loadMenuSideBar() {
    const navbar = $(".js-navbar:not(.navbar-fixed)");
    navbar.on("affix.bs.affix", function() {
      if (!navbar.hasClass("affix")) {
        navbar.addClass("animated slideInDown");
      }
    });

    navbar.on("affixed-top.bs.affix", function() {
      navbar.removeClass("animated slideInDown");
    });

    $('.nav-mobile-list li a[href="#"]').on("click", function() {
      $(this)
        .closest("li")
        .toggleClass("current");
      $(this)
        .closest("li")
        .children("ul")
        .slideToggle(200);
      return false;
    });

    $(".navbar-toggle").on("click", function() {
      $("body")
        .removeClass("menu-is-closed")
        .addClass("menu-is-opened");
    });

    $(".close-menu, .click-capture, .menu-list li a").on("click", function() {
      $("body")
        .removeClass("menu-is-opened")
        .addClass("menu-is-closed");
      $(".menu-list ul").slideUp(300);
      $(window).scrollTop(0);
    });

    var dropToggle = $(".menu-list > li")
      .has("ul")
      .children("a");

    dropToggle.on("click", function() {
      dropToggle
        .not(this)
        .closest("li")
        .find("ul")
        .slideUp(200);
      $(this)
        .closest("li")
        .children("ul")
        .slideToggle(200);
      return false;
    });

    $(".js-target-scroll").on("click", function() {
      var target = $(this.hash);
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top - navbar.outerHeight()
          },
          1000
        );
        return false;
      }
    });
  }
}
