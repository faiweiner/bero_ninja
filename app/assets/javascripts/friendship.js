$(function() {
	$('.friendship-accept-request').click(removeRow);
});

var removeRow = function(event) {
	$(this).closest('tr').remove();
};