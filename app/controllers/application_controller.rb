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

  CALLBACK_URL = "http://localhost:3000/oauth/callback" if Rails.env.development?
  CALLBACK_URL = "http://bero.herokuapp.com/oauth/callback" if Rails.env.production?

  Instagram.configure do |config|
    config.client_id = "09064336ee50416792fe11b37ebb9241"
    config.client_secret = "c1dae9f2ab604ff68128b0136f6b2b31"
  end
end
