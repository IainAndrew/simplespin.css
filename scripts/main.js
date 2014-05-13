hljs.initHighlightingOnLoad();

$(".ex-5-div").hover(function() {
	$(this).toggleClass("spin-1s spin-once spin-ease");
});

$(".ex-6 i").hover(function() {
	$(this).toggleClass("spin-05s spin-once");
});

$(".fork-me i").hover(function() {
	$(this).toggleClass("spin-05s spin-once spin-rev spin-ease");
});

function scrollTo (click, goto) {
	click.click(function() {
	    $('html, body').animate({scrollTop:goto.offset().top - 40}, 300);
	    return false;
	});
}

scrollTo( $("#nav-demo"), $(".demo") );
scrollTo( $("#fix-nav-demo"), $(".demo") );
scrollTo( $("#nav-tutorial"), $(".tutorial") );
scrollTo( $("#fix-nav-tutorial"), $(".tutorial") );
scrollTo( $("#nav-download"), $(".download") );
scrollTo( $("#fix-nav-download"), $(".download") );

$(window).on('scroll', function() {
    if ($(window).scrollTop() > 140) {
        $('.header-fixed').show();
    } else {
        $('.header-fixed').hide();
    }
});