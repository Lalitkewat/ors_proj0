$(function() {
	$("#select_all").click(function() {
		$('.case').attr('checked', this.checked);
	});
	$(".case").click(function() {

		if ($(".case").length == $(".case:checked").length) {
			$("#select_all").attr("checked", "checked");
		} else {
			$("#select_all").removeAttr("checked");
		}

	});
});