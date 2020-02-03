var gbLandscape = {
  loadOwlCarousel: function () {
  	if ($('.owl-carousel').length > 0){
  	   $('.project-carousel').owlCarousel({
  		    dots:true,
  		    margin:30,
  		    smartSpeed:250,
  		    responsiveRefreshRate:0,
  		    responsive:{
  		        0:{
  		            items:1
  		        },
  		        768:{
  		            items:2
  		        },
  		        1200:{
  		            items:3
  		        },
  		        1600:{
  		            items:4
  		        }
  		    }
  		});
    }
  },

  columnGrid: function (){
    $('.js-grid-items').each(function(){
      var colWrap =$(this).width();
      var colItem = Math.floor(colWrap / 390);
      var colFixedItem = Math.floor(colWrap / colItem);
      $(this).find('.js-grid-item').css({ 'width' : colWrap});
      $(this).find('.js-grid-item').css({ 'width' : colFixedItem});
    });
  },

  loadNavBar: function(){
    var navbar=$('.js-navbar:not(.navbar-fixed)');

    	navbar.affix({
    	  offset: {
    	    top: 50
    	  }
    	});

    	navbar.on('affix.bs.affix', function() {
    		if (!navbar.hasClass('affix')){
    			navbar.addClass('animated slideInDown');
    		}
    	});

    	navbar.on('affixed-top.bs.affix', function() {
    	  	navbar.removeClass('animated slideInDown');

    	});

    	$('.nav-mobile-list li a[href="#"]').on('click',function(){
    		$(this).closest('li').toggleClass('current');
    		$(this).closest('li').children('ul').slideToggle(200);
    		return false;
    	});

    	$('.navbar-toggle').on('click',function(){
        console.log('navbar-toggle');
    		$('body').removeClass('menu-is-closed').addClass('menu-is-opened');
    	});

    	$('.close-menu, .click-capture, .menu-list li a').on('click', function(){
    		$('body').removeClass('menu-is-opened').addClass('menu-is-closed');
    		$('.menu-list ul').slideUp(300);
        $(window).scrollTop(0);
    	});


    	var dropToggle =$('.menu-list > li').has('ul').children('a');

    	dropToggle.on('click',function(){
    		dropToggle.not(this).closest('li').find('ul').slideUp(200);
    		$(this).closest('li').children('ul').slideToggle(200);
    		return false;
    	});

      $('.js-target-scroll').on('click', function() {
          var target = $(this.hash);
          if (target.length) {
              $('html,body').animate({
                  scrollTop: (target.offset().top - navbar.outerHeight())
              }, 1000);
              return false;
          }
      });
  },

  loadFilter: function (){
    $('.js-filter li a').on('click', function() {
      $('.js-filter .active').removeClass('active');
      $(this).closest('li').addClass('active');
      var selector = $(this).attr('data-filter');
      $('.js-isotope').isotope({
        filter: selector,
        animationOptions: {
          duration: 500,
          queue: false
        }
      });
      return false;
    });
  },

  loadFilterCarousel: function (){
    $('.js-filter-carousel li a').on('click', function() {
      $('.js-filter-carousel .active').removeClass('active');
      $(this).closest('li').addClass('active');
      var selector = $(this).attr('data-filter');
      $('.project-carousel').fadeOut(300);
      $('.project-carousel').fadeIn(300);
      setTimeout(function(){
        $('.project-carousel .owl-item').hide();
        $(selector).closest('.project-carousel .owl-item').show();
      }, 300);
      return false;
    });
  },

  loadSlyCarousel:function (){
    	var $frame  = $('.sly');
    		var $slidee = $frame.children('ul').eq(0);
    		var $wrap   = $frame.parent();

    		if ($frame.length > 0){
    			$frame.sly({
    				horizontal: 1,
    				itemNav: 'basic',
    				smart: 1,
    				activateOn: 'click',
    				mouseDragging: 1,
    				touchDragging: 1,
    				releaseSwing: 1,
    				startAt: 0,
    				scrollBar: $wrap.find('.scrollbar'),
    				scrollBy: 0,
    				activatePageOn: 'click',
    				speed: 1000,
    				elasticBounds: 2,
    				dragHandle: 2,
    				dynamicHandle: 1,
    				clickBar: 0,

    				// Buttons
    				prevPage: $wrap.find('.prev'),
    				nextPage: $wrap.find('.next')
    			});

    			$(window).resize(function(){
    				$frame.sly('reload');
    			});
    		}

  },

  loadRevSlider: function (){
    if (typeof $.fn.revolution !== 'undefined') {
      $("#rev_slider").revolution({
        sliderType:"standard",
        sliderLayout:"fullscreen",
        dottedOverlay:"none",
        delay:7000,
        autoHeight: 'on',
        minHeight:380,
        navigation: {
          keyboardNavigation:"off",
          keyboard_direction: "horizontal",
          onHoverStop:"off",
          touch:{
            touchenabled:"on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
          },
          bullets: {
            enable: true,
            hide_onmobile: true,
            direction: "horizontal",
            container: 'layergrid',
            h_align: "right",
            v_align: "bottom",
            h_offset: 30,
            v_offset: 110,
            space: 12
        }
        },
        parallax: {
          type:"scroll",
          origo:"slidercenter",
          speed:300,
          levels:[5,10,15,20,25,30,35,40,45,50,47,48,49,50,51,55],
          disable_onmobile: 'on'
        },
        viewPort: {
          enable: true,
          outof: 'pause',
          visible_area: '80%',
          presize: true
        },
        responsiveLevels:[2048,1600,1260, 992],
        gridwidth:[1370,1100,900, 700],
        gridheight:[800],
        lazyType:"none",
        shadow:0,
        spinner: "spinner5",
        stopLoop:"on",
        stopAfterLoops:0,
        shuffle:"on",
        autoHeight:"on",
        fullScreenAlignForce:"off",
        fullScreenOffsetContainer: ".navbar",
        fullScreenOffset: "",
        disableProgressBar:"on",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
          simplifyAll:"off",
          nextSlideOnWindowFocus:"off",
          disableFocusListener:false,
        }
      });
    }

    $('.slider-prev').on('click', function(){
        $(".rev_slider").revprev();
    });

    $('.slider-next').on('click', function(){
        $(".rev_slider").revnext();
    });
  }
};

$(window).resize(function(){
  window.gbLandscape.columnGrid();
});


﻿( function($) {
  'use strict';



	var mobileDevice = false;

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  	$('html').addClass('mobile');
	  	mobileDevice = true;
	}

	else{
		$('html').addClass('no-mobile');
		mobileDevice = false;
	}

})(jQuery);
