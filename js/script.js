$(window).on('load', function() {
	$('#preloader').css({
		'transform' : 'translateY(100%',
		'opacity' : '0',
	});
});

VanillaTilt.init(document.querySelectorAll(".cards"), {
	max: 20,
	speed: 400,
	reverse: true,
});
