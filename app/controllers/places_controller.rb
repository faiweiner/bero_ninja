class PlacesController < ApplicationController::Base
  def index
    @places = @current_user.places
  end
end