$(document).on("click", ".friendship-deny-request", function () {
		// $('#addBookDialog').modal('show');
	var friendshipId = $(this).data('id');
	$(".modal-body #friendship-id").val( friendshipId );
	console.log(friendshipId);
});
