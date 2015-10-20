function initDrag() {
    var total = ($("#proof > div").size() - 1);
    var start, stop;
    //
    $("#proof > div").each(function(i) {
        if (i != "0") {
            $(this).css('left', $("#proof").width() + "px");
        }
        $("#slide_" + i + "").on("hover", function(event) {
            previous = "slide_" + (i - 1) + "";
            current = $(this).attr("id");
            next = "slide_" + (i + 1) + "";
            if (current == "slide_0") {
                previous = "slide_" + total + "";
            }
            if (current == "slide_" + total + "") {
                next = "slide_0";
            }
            $(this).draggable({
                axis: "x",
                cursor: "move",
                start: function(event, ui) {
                    event.stopPropagation();
                    start = ui.position.left;
                },
                stop: function(event, ui) {
                    event.stopPropagation();
                    stop = ui.position.left;
                    if (start > stop) {
                        $("#" + next + "").animate({
                            left: "-=" + $('#proof').width() + "px"
                        }, {
                            duration: 'slow',
                            easing: 'easeOutBack'
                        });
                        $("#" + current + "").css('left', $('#proof').width() + "px");
                    } else {
                        $("#" + previous + "").css('left', "-" + ($('#proof').width() + "px"));
                        $("#" + previous + "").animate({
                            left: "0"
                        }, {});
                        $("#" + current + "").css('left', $('#proof').width() + "px");
                    }
                }
            });
        });
    });
    timer = true;
}
//
$('.menu > li').find('a').on('click', function(event) {
    event.preventDefault();
    $("#proof > div").each(function(i) {
        if ($(this).css('left') == "0px") {
            on_screen = $(this).attr('id');
        }
    });
    scroll_element = $(this).attr('href');
    $(scroll_element).animate({
        left: "-=" + $('#proof').width() + "px"
    }, {
        duration: 'slow',
        easing: 'easeOutBack'
    });
    $("#" + on_screen + "").css('left', $('#proof').width() + "px");
});
//
$(document).ready(function() {
    initDrag();
});