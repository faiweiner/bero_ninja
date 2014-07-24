$(document).ready(function(){
	console.log("Are you included?");
	var removeFriendRequests = function() {
	};

	var renderFriendships = function() {

	};

	var updateAllUsersList = function() {

	};

	$('.friendship-accept-request').click(function() {
		console.log("Hello");
		$(this).closest('tr').remove();
		$('#user-friends').children().css('background-color', 'blue')
	});

	$('.friendship-accept-request').on('ajax:success', function(event, response) {
		console.log(response);
	});

});
