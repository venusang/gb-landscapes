// var gbLandscape = {
//   columnGrid: function (){
//     $('.js-grid-items').each(function(){
//       var colWrap =$(this).width();
//       var colItem = Math.floor(colWrap / 390);
//       var colFixedItem = Math.floor(colWrap / colItem);
//       $(this).find('.js-grid-item').css({ 'width' : colWrap});
//       $(this).find('.js-grid-item').css({ 'width' : colFixedItem});
//     });
//   },
//
//   projectsGalleryGrid: function (){
//       $('.projects-gallery .js-grid-items').each(function(){
//         var colWrap =$(this).width();
//         var colItem = Math.floor(colWrap / 200);
//         var colFixedItem = Math.floor(colWrap / colItem);
//         $(this).find('.js-grid-item').css({ 'width' : colWrap});
//         $(this).find('.js-grid-item').css({ 'width' : colFixedItem});
//       });
//   }
// };
//
// $(window).resize(function(){
//   window.gbLandscape.columnGrid();
//   window.gbLandscape.projectsGalleryGrid();
// });
//
//
// ﻿( function($) {
//   'use strict';
//
// 	var mobileDevice = false;
//
// 	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
// 	  	$('html').addClass('mobile');
// 	  	mobileDevice = true;
// 	}
//
// 	else{
// 		$('html').addClass('no-mobile');
// 		mobileDevice = false;
// 	}
//
// })(jQuery);
