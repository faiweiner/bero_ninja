class PlacesController < ApplicationController
  def index
    # @places = @current_user.places
    @places = Place.all
  end
end