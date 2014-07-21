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

  def lookup
    @place = Place.find params[:id]

    @coordinates = {"user_lat" => params[:user_lat], "user_lng" => params[:user_lng]}

    # binding.pry
    # @bearing = Geocoder::Calculations.bearing_between([@coordinates["user_lat"], @coordinates["user_lng"]],[@place.latitude,@place.longitude ]) # =>  "45"
    @bearing = Geocoder::Calculations.bearing_between([@coordinates["user_lat"], @coordinates["user_lng"]],[-33.8587, 151.2140]) # =>  "45"
    # # # To get the compass from bearing
    @compass = Geocoder::Calculations.compass_point(@bearing) #=> "NE"

    # # #distance between points
    @distance = Geocoder::Calculations.distance_between([@coordinates["user_lat"], @coordinates["user_lng"]],[-33.8587, 151.2140]) # => "1.06" in miles

    # # #to km
    # @distance = Geocoder::Calcualtions.to_kilometers(@distance) # => "1.7" km

    @location = {"coords" => @coordinates, "bearing" => @bearing, "distance" => @distance, "compass" => @compass};
    # @location << @coordinates << @compass << @distance

    render :json => @location
    # render :json => @bearing
  end

  def show
    # binding.pry
    @place = Place.find params[:id]
  end



  private
  def place_params
    params.require(:place).permit(:address, :category, :favorite)
  end

  def check_if_logged_in
    redirect_to(root_path) unless @current_user
  end
end