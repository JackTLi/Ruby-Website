portfolio_items = ["knowledgehook", "jamaquiz", "familybbq", "partnerpackage"]
num_items = portfolio_items.length
current_item = -1

jQuery ->
	$(".sliding-link").click ->
		event.preventDefault()
		$('html,body').animate { scrollTop:$(this.hash).offset().top }, 400

	$(".toggle-more").click ->
		$(this).parent().toggleClass('expanded')

	$(".slide-toggle").click ->
		$('#hamburger').toggleClass('open')
		$('.nav-slider').toggleClass('open')
		$('.dimmer').toggleClass('open')
		$('body').toggleClass("fixed-position")

	$('#nav-portfolio').click ->
		$('.portfolio-menu').toggleClass('open')
		$('.primary-menu').toggleClass('portfolio-opened')
		$('.bottom-nav-items').toggleClass('portfolio-opened')

	$('.prev-portfolio').click ->
		current_item = (current_item - 1)
		if current_item < 0
			current_item = num_items - 1
		window.location.href = portfolio_items[current_item] + ".html"

	$('.next-portfolio').click ->
		current_item = (current_item + 1) % num_items
		window.location.href = portfolio_items[current_item] + ".html"

  return

$(window).load ->
	checkOverflow300()
	checkOverflow400()
	current_path = window.location.pathname.split("/").pop()
	current_path = current_path.split(".html")[0]
	current_item = -1;

	for item, i in portfolio_items
		if item == current_path
			current_item = i
			$('#pfnav-'+portfolio_items[current_item]).addClass('selected-page')

	if (current_item == -1)
		$('#navigation-arrows').addClass('hidden');
		$(".se-pre-con").fadeOut(1000)
	else
		$(".se-pre-con").fadeOut(500)


$(window).resize ->
	checkOverflow300()
	checkOverflow400()

checkOverflow400 = () ->
	$('.overflowable400').each ->
		if $(this).height() > 400
			$(this).addClass('overflowed400')
		else
			$(this).removeClass('.overflowed400')

checkOverflow300 = () ->
	$('.overflowable300').each ->
		if $(this).height() > 300
			$(this).addClass('overflowed300')
		else
			$(this).removeClass('.overflowed300')
