// Clock Get Time (Hours, Minute, Second)
// Degree : 6 deg

$(document).ready(function () {
	setInterval(function () {
		var time = new Date();

		var hh = time.getHours() * 30;
		var mm = time.getMinutes() * 6;
		var ss = time.getSeconds() * 6;

		$('.hr').css({'transform': 'rotateZ(' + (hh+(mm/12)) + 'deg)'});
		$('.min').css({'transform': 'rotateZ(' + (mm) + 'deg)'});
		$('.sec').css({'transform': 'rotateZ(' + (ss) + 'deg)'});
	})
});


// Theme Modes

$('#clock-theme').click(function () {
	$('body').toggleClass('dark');
	$('.theme-modes i').toggleClass('dark');
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