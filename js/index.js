$(window).load(function(){
	makeImageBoxSquare();
 });

$(window).resize(function() {
	makeImageBoxSquare();
});

function makeImageBoxSquare() {
	var w = $('.imageBox').width();
	$('.topHalf').css('height', w);
}

$(document).ready(function() {
	var bgVisible = false;

	$(window).on('scroll', function() {
	    var y_scroll_pos = window.pageYOffset;
	    var scroll_pos = 400;          

	    if(y_scroll_pos > scroll_pos && !bgVisible) {
	        $(".navBackground").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
	        bgVisible = true;
	    }
	    else if (y_scroll_pos < scroll_pos && bgVisible)
	    {
	    	$(".navBackground").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
	    	bgVisible = false;
	    }
	})
});