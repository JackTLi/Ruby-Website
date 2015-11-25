
var currentPage = 0;

$(document).ready(function() {

	highlightAppropriateMenuItem();

	var navSliderWidth = $('.navSlider').width();
	$('.navSlider').css("right", (-1 * navSliderWidth)+ 'px');

	$(".sliding-link").click(function(event) {
	    event.preventDefault();
	    $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 700);
    } );

    var bgVisible = false;

    $("").scroll( function() {
    	console.log("scroll");
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos = 400;          

        if(y_scroll_pos > scroll_pos && !bgVisible) {
            $(".navBackground").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 0.9});
            bgVisible = true;
        }
        else if (y_scroll_pos < scroll_pos && bgVisible)
        {
        	$(".navBackground").css({opacity: 0.9, visibility: "hidden"}).animate({opacity: 0.0});
        	bgVisible = false;
        }
    })

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

     $(".navSliderLink").click(function(event) {
     	var href = $(this).attr('href');
     	highlightMenuItemFromHref(href);
     })
});

function openNavSlider () {
    var navSliderWidth = $('.navSlider').width();

	$('.navSlider').animate( {"right": 0 }, 300);
	$('.nav .links ul').animate( {"margin-right": navSliderWidth - 50}, 300);
	$('.navBackground').animate({"left": -1 * navSliderWidth}, 300);
}

function closeNavSlider () {
    var navSliderWidth = $('.navSlider').width();

	$('.navSlider').animate( {"right": (-1 * navSliderWidth) }, 300);
	$('.nav .links ul').animate( {"margin-right" : 0}, 300);
	$('.navBackground').animate({"left": 0}, 300);
}

function highlightAppropriateMenuItem() {
	if(window.location.hash) {
	    var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
	    
		highlightMenuItemFromHref (hash);
	    
	} else {
	    
	}
}

function highlightMenuItemFromHref (href) {
	var hash = href.substring(href.indexOf('#')+1);

	if (hash.indexOf('/') > -1)
	{
		hash = hash.substring(hash.indexOf('/') + 1);
	}

	    console.log(hash);
	    
	    if($('#BBQlink').hasClass('hilight')){
	       $('#BBQlink').removeClass('hilight');
	    }

		if($('#impactreportlink').hasClass('hilight')){
		   $('#impactreportlink').removeClass('hilight');
		}

		if($('#partnerpackagelink').hasClass('hilight')){
		   $('#partnerpackagelink').removeClass('hilight');
		}

		if($('#partnermeetinglink').hasClass('hilight')){
		   $('#partnermeetinglink').removeClass('hilight');
		}

		if($('#knowledgehooklink').hasClass('hilight')){
		   $('#knowledgehooklink').removeClass('hilight');
		}

	   	if (hash == "BBQ")
	    {
	    	$('#BBQlink').addClass("hilight");
	    }
	    if (hash == "impactreport")
	    {
	    	$('#impactreportlink').addClass("hilight");
	    }
	    if (hash == "partnerpackage")
	    {
	    	$('#partnerpackagelink').addClass("hilight");
	    }
	    if (hash == "partnersmeeting")
	    {
	    	$('#partnermeetinglink').addClass("hilight");
	    }
	    if (hash == "knowledgehook")
	    {
	    	$('#knowledgehooklink').addClass("hilight");
	    }

}