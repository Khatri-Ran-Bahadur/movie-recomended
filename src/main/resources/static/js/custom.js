function stickyHeader () {
	if ($('.stricky').length) {
		var strickyScrollPos = 100;
		if($(window).scrollTop() > strickyScrollPos) {
			$('.stricky').removeClass('fadeIn animated');
			$('.stricky').addClass('stricky-fixed fadeInDown animated');
			$('.scroll-to-top').fadeIn(500);
		}
		else if($(this).scrollTop() <= strickyScrollPos) {
			$('.stricky').removeClass('stricky-fixed fadeInDown animated');
			$('.stricky').addClass('slideIn animated');
			$('.scroll-to-top').fadeOut(500);
		}
	};
}

jQuery(window).scroll(function () {	
	(function ($) {
		stickyHeader();
	})(jQuery);
});
