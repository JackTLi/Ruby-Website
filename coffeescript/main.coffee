jQuery ->
  $(".sliding-link").on "click", ->
    event.preventDefault();
    $('html,body').animate { scrollTop:$(this.hash).offset().top }, 400;
    return

  return
