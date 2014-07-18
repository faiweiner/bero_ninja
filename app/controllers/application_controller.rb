class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :authenticate

  private
  def authenticate
    @current_user = User.where(:id => session[:user_id]).first if session[:user_id].present?
    if @current_user.nil?
      session[:user_id] = nil
    end
  end
end
