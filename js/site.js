$(window).load(function(){
	makeImageBoxSquare();
 })

$(window).resize(function() {
	makeImageBoxSquare();
})

function makeImageBoxSquare() {
	var w = $('.imageBox').width();
	$('.topHalf').css('height', w);
}