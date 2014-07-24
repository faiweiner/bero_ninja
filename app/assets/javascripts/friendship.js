$(document).ready(function(){
	console.log("Are you included?");
	$('.button_to').on('ajax:success', function(event, response) {
		$(this).closest('tr').remove();
		var appendFriendsTable = $('#user-friends').first().find('tbody');
		var $tr = $('<tr/>');
		var $td = $('<td/>');
	});

});

arget user-friends.first, find tbody and then append the tr with td inside
