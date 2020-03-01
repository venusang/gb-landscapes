import Component from "@glimmer/component";
import { action } from "@ember/object";
import $ from "jquery";

export default class HomepageProjectsComponent extends Component {
  @action
  loadOwlCarousel() {
    if ($(".owl-carousel").length > 0) {
      $(".project-carousel").owlCarousel({
        dots: true,
        margin: 30,
        smartSpeed: 250,
        responsiveRefreshRate: 0,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1200: {
            items: 3
          },
          1600: {
            items: 4
          }
        }
      });
    }
  }
}
