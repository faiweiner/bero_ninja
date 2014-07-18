class PlacesController < ApplicationController
  def index
    @places = @current_user.places
  end
end