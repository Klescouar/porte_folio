$(document).ready(function() {
    $('header a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(e.target.hash).offset().top
        }, 500);
    });
});

var x = $('.skills').prev().height() / 4;
var containerHeight = $(window).height() / 2;
$('.spacer').css("height", containerHeight);
$(window).scroll(function() {
    if ($(window).scrollTop() >= x) {
        $('.skill-percent').each(function() {
            $(this).animate({
                width: $(this).data('percent') + '%'
            }, 3000);
        });
    }
});
