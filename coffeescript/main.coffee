jQuery ->
	$(".sliding-link").click ->
		event.preventDefault();
		$('html,body').animate { scrollTop:$(this.hash).offset().top }, 400;

	$(".toggle-more").click ->
			if $(this).parent().hasClass('expanded')
				$(this).parent().removeClass('expanded')
			else
				$(this).parent().addClass('expanded')

  return

$(window).load ->
	 checkOverflow300()
	 checkOverflow400()

$(window).resize ->
	checkOverflow300()
	checkOverflow400()



checkOverflow400 = () ->
	$('.overflowable400').each ->
		if $(this).height() > 400
			$(this).addClass('overflowed400');
		else
			$(this).removeClass('.overflowed400');

	$('.overflowed').each ->

checkOverflow300 = () ->
	$('.overflowable300').each ->
		h = $(this).height()
		if $(this).height() > 300
			$(this).addClass('overflowed300');
		else
			$(this).removeClass('.overflowed300');
