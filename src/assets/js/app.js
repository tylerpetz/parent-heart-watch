$(document).foundation();

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