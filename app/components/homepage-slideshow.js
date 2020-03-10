import Component from "@glimmer/component";
import $ from "jquery";
import { action } from "@ember/object";
// import { tracked } from "@glimmer/tracking";

export default class HomepageSlideshowComponent extends Component {
  @action
  loadRevSlider() {
    {
      if (typeof $.fn.revolution !== "undefined") {
        $("#rev_slider").revolution({
          sliderType: "standard",
          sliderLayout: "fullscreen",
          dottedOverlay: "none",
          delay: 7000,
          autoHeight: "on",
          minHeight: 380,
          navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            onHoverStop: "off",
            touch: {
              touchenabled: "on",
              swipe_threshold: 75,
              swipe_min_touches: 1,
              swipe_direction: "horizontal",
              drag_block_vertical: false
            },
            bullets: {
              enable: true,
              hide_onmobile: true,
              direction: "horizontal",
              container: "layergrid",
              h_align: "right",
              v_align: "bottom",
              h_offset: 30,
              v_offset: 110,
              space: 12
            }
          },
          parallax: {
            type: "scroll",
            origo: "slidercenter",
            speed: 300,
            levels: [
              5,
              10,
              15,
              20,
              25,
              30,
              35,
              40,
              45,
              50,
              47,
              48,
              49,
              50,
              51,
              55
            ],
            disable_onmobile: "on"
          },
          viewPort: {
            enable: true,
            outof: "pause",
            visible_area: "80%",
            presize: true
          },
          responsiveLevels: [2048, 1600, 1260, 992],
          gridwidth: [1370, 1100, 900, 700],
          gridheight: [800],
          lazyType: "none",
          shadow: 0,
          spinner: "spinner5",
          stopLoop: "on",
          stopAfterLoops: 0,
          shuffle: "on",
          fullScreenAlignForce: "off",
          fullScreenOffsetContainer: ".navbar",
          fullScreenOffset: "",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
          }
        });
      }

      $(".slider-prev").on("click", function() {
        $(".rev_slider").revprev();
      });

      $(".slider-next").on("click", function() {
        $(".rev_slider").revnext();
      });
    }
  }
}
