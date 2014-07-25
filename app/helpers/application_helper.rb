module ApplicationHelper
	def smartnav
		links = ''
		if @current_user.present?
			links += 	"<li>"
			links += 		link_to('Logout', login_path, :data => {:method => :delete, :id => 'logout-link'})
			links += 	"</li>"
			links += 	"<li>"
			links += 		link_to("#{@current_user.username}", user_path(@current_user))
			links += 	"</li>"
			links +=	"<li class='dropdown'>"
			links +=		"<a href=' class='dropdown-toggle' data-toggle='dropdown'>Friends <span class='caret'></span></a>"
			links +=		"<ul class='dropdown-menu navbar-inverse' role='menu'>"
			links +=			"<li>"
			links +=				link_to("Bero a friend", friends_path)
			links +=			"</li>"
			links +=			"<li>"
			links +=				link_to("Manage friends", friendships_path)
			links +=			"</li>"
			links +=		"</ul>"
			links += 	"</li>"
			links +=	"<li class='dropdown'>"
			links +=		"<a href=' class='dropdown-toggle' data-toggle='dropdown'>Places <span class='caret'></span></a>"
			links +=		"<ul class='dropdown-menu navbar-inverse dropdown-black' role='menu'>"
			links +=			"<li>"
			links +=				link_to("Bero a place", places_path)
			links +=			"</li>"
			links +=			"<li>"
			links +=				link_to("Add a place", new_place_path)
			links +=			"</li>"
			links +=		"</ul>"
			links +=	"</li>"
		else
			# display nothing
		end

		links
	end
end




