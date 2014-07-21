class PlacesController < ApplicationController

  def index
    @places = @current_user.places
    user_location = request.location
    @current_location = Geocoder.search(user_location)
  end

  def create

  end

  private
    def check_if_logged_in
      redirect_to(root_path) unless @current_user
    end
end