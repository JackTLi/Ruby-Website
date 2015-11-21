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

	var navSliderWidth = $('.navSlider').width();
	$('.navSlider').css("right", (-1 * navSliderWidth)+ 'px');

	$(".sliding-link").click(function(event) {
	    event.preventDefault();
	    $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 700);
    } );

    document.querySelector( "#nav-toggle" )
      .addEventListener( "click", function() {
        this.classList.toggle( "active" );
        if (this.classList.contains('active'))
        {
        	openNavSlider();
        }
        else {
        	closeNavSlider();
        }
      });
});

function openNavSlider () {
    var navSliderWidth = $('.navSlider').width();

	$('.navSlider').animate( {"right": 0 }, 300);
	$('.nav .links ul').animate( {"margin-right": navSliderWidth - 50}, 300);
}

function closeNavSlider () {
    var navSliderWidth = $('.navSlider').width();

	$('.navSlider').animate( {"right": (-1 * navSliderWidth) }, 300);
	$('.nav .links ul').animate( {"margin-right" : 0}, 300);
}