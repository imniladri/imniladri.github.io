// FlipClock JS Types

// FlipClock Time_12

$.clock = $('.clock1').FlipClock({
	clockFace: 'TwelveHourClock'
});


// FlipClock Time_24

$.clock = $('.clock2').FlipClock({
	clockFace: 'TwentyFourHourClock'
});


// FlipClock CountDown

$.clock = $('.clock3').FlipClock(new Date("Jul 1, 2021 00:00:00"),{
	clockFace: 'DailyCounter',
	countdown: true
});


// FlipClock Timer

$.clock = $('.clock4').FlipClock({
	clockFace: 'DailyCounter'
});




// Theme Modes

$('.theme_modes').click(function () {
	$('html').toggleClass('dark');
	$('body').toggleClass('dark');
	$('div.dark_mode').toggleClass('dark');
	$('div.theme_modes i').toggleClass('dark');
});




// CODE/WEBSITE IS SECURED/PROTECTED
/*
$(document).ready(function(){
	// Disable CTRL/SHIFT KEY
	$(document).keydown(function(e){
		if (e.ctrlKey && (e.keyCode === 73 || e.keyCode === 83 || e.keyCode === 85 || e.keyCode === 123))
		{
			swal("Oops!", "Sorry:(, It's not allowed!", "error");
			return false;
		}
		else if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73))
		{
			swal("Oops!", "Sorry:(, It's not allowed!", "error");
			return false;
		}
		else { return true; }
	});

	// Disable Right Click
	$(document).bind("contextmenu", function(e){
		e.preventDefault();
		swal("Oops!", "Sorry:(, It's not allowed!", "error");
		return false;
	});
});
*/