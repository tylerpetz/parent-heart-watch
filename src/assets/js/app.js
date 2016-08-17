$(document).foundation();

$(document).ready(function() {
  $("#slider").owlCarousel({
  	items: 1,
  	singleItem: true,
  	touchDrag: false,
  	mouseDrag: false
  });

  $(".news-slider").owlCarousel({
  	items: 3,
  	touchDrag: false,
  	mouseDrag: false,
  	pagination: false,
  	navigation: true
  });
});

$(document).on('click touchstart', '.menu-icon', function () {
	if ($('nav').hasClass('open')) {

		$(this).removeClass('menu-opened');

		$('nav').removeClass('pop-in').addClass('pop-out');
		setTimeout(function () {
			$('nav').removeClass('open');
		}, 300);
	} else {
		
		$(this).addClass('menu-opened');
		$('nav').addClass('open pop-in').removeClass('pop-out');
	}
});