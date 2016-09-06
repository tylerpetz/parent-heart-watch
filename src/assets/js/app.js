$(document).foundation();

$(document).ready(function() {

  var url = window.location.pathname;
  url = url.replace('/', '');
  $('header nav a').each(function() {
    if ($(this).attr('href') == url) {
      $(this).parent().addClass("active");
      $(this).parents('.dropdown').addClass("active");
    }
  });

  $('.dropdown').mouseover(function () {
    $('.dropdown').not($(this)).find('ul').hide();
    $(this).find('ul').show();
  }).mouseout(function () {
    $('.dropdown').find('ul').hide();
    $('.dropdown.active').find('ul').show();
  });

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
  	navigation: true,
  	navigationText:	["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
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


