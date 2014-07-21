class PlacesController < ApplicationController

  def index
     @places = @current_user.places
  end

  def new
    @places = @current_user.places
<<<<<<< HEAD
    user_location = request.location
    @current_location = Geocoder.search(user_location)
=======
    @place = Place.new
>>>>>>> 1a196cda1b7ff29b45fe324c76ab38a10a5c9f7d
  end

  def create
    @place = Place.new place_params
    if @place.save
      @current_user.places << @place
      render :json => @place
    end
  end



  private
  def place_params
    params.require(:place).permit(:address, :category, :favorite)
  end

  def check_if_logged_in
    redirect_to(root_path) unless @current_user
  end
end