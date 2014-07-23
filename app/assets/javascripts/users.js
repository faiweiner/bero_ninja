$(document).ready(function() {

	if (window.location.pathname.indexOf("/oauth/", 0) == 0) {
		console.log("this url has 'oauth' in it");

		$('#btn-confirm-submit').on('click', function (event) {
    	event.preventDefault();
	    var instUsername = $('#username').val();
	    var instProfilePicture = $('#profile_picture').val();
	    var instInstagramId = $('#instagram_id').val();
	    var instPassword = $('#password').val();
	    var instPasswordConfirmation = $('#password_confirmation').val();
			var valuesToSubmit = $(this).serialize();

			console.log('hotdogs', instUsername, instProfilePicture, instInstagramId, instPassword, instPasswordConfirmation);

			$.ajax({
			  url: '/users',
			  type: 'POST',
			  dataType: 'json',
			  data: {
			    user: {
				    username: instUsername,
				    profile_picture: instProfilePicture,
				    instagram_id: instInstagramId,
				    password: instPassword,
				    password_confirmation: instPasswordConfirmation
				  }
			  },
			  success: function (u) {
					$(location).attr('href', '/users/current');
		});

	};

});