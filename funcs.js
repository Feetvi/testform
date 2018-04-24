$(document).ready( function() {
	$(".first input[type=file]").change(function() {
		var filename = $(this).val();
		$("#filename1").val(filename);
	});
	$(".second input[type=file]").change(function() {
		var filename = $(this).val();
		$("#filename2").val(filename);
	});
});