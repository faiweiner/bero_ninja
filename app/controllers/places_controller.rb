class PlacesController < ApplicationController

  def index
     @places = @current_user.places
  end

  def new
    @places = @current_user.places
    @place = Place.new
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