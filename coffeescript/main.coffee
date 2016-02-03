jQuery ->
	$(".sliding-link").click ->
		event.preventDefault();
		$('html,body').animate { scrollTop:$(this.hash).offset().top }, 400;

	$(".toggle-more").click ->
		if $(this).parent().hasClass('expanded')
			$(this).parent().toggleClass('expanded')

	$(".slide-toggle").click ->
		$('#hamburger').toggleClass('open')
		$('.nav-slider').toggleClass('open')
		$('.dimmer').toggleClass('open')
		$('body').toggleClass("fixed-position")

	$('#nav-portfolio').click ->
		$('.portfolio-menu').toggleClass('open')
		$('.primary-menu').toggleClass('portfolio-opened')

  return

$(window).load ->
	 checkOverflow300()
	 checkOverflow400()

$(window).resize ->
	checkOverflow300()
	checkOverflow400()



checkOverflow400 = () ->
	$('.overflowable400').each ->z
		if $(this).height() > 400
			$(this).addClass('overflowed400');
		else
			$(this).removeClass('.overflowed400');

checkOverflow300 = () ->
	$('.overflowable300').each ->
		if $(this).height() > 300
			$(this).addClass('overflowed300');
		else
			$(this).removeClass('.overflowed300');
