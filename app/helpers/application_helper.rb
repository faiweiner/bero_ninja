module ApplicationHelper
  def smartnav
    links = ''
    if @current_user.present?
      links += "<li>"
      links += link_to('Logout', login_path, :data => {:method => :delete, :confirm => 'Really logout?'})
      links += "</li>"
      links += "<li>"
      links += link_to("Welcome #{@current_user.username}", user_path(@current_user))
      links += "</li>"
    else
      links += "<li>#{ link_to('Sign up', new_user_path) }</li>"
      links += "<li>#{ link_to('Sign in', new_session_path) }</li>"
    end

    links
  end
end
