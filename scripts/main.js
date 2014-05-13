hljs.initHighlightingOnLoad();

$("li").hover(function() {
	$(this).toggleClass("spin-05s spin-once");
});

$(".ex-5-div").click(function() {
	$(this).toggleClass("spin-1s spin-once spin-ease");
});

$(".ex-6 i").hover(function() {
	$(this).toggleClass("spin-05s spin-once");
});