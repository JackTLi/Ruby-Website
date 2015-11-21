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

	$(".sliding-link").click(function(event) {
	    event.preventDefault();
	    $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 700);
    } );
});