module ApplicationHelper
  def smartnav
    links = ''
    links += bero

    if @current_user.present?
      links += "<li>"
      links += link_to('Logout', login_path, :data => {:method => :delete, :confirm => 'Really logout?'})
      links += "</li>"
      links += "<li>"
      links += link_to("Welcome #{@current_user.username}", user_path(@current_user))
      links += "</li>"
    else
      links += "<div>#{ link_to('Sign up', new_user_path) }</div>"
      links += "<div>#{ link_to('Sign in', new_session_path) }</div>"
    end

    links
  end

  def bero
    "<div class='doo-doo'>#{ link_to('Bero', root_path) }</div>"
  end
end
