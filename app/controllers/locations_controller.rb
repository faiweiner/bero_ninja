class LocationsController < ApplicationController

	def lookup
		@coordinates = {"user_lat" => params[:user_lat], "user_lng" => params[:user_lng]}



    # binding.pry
    @bearing = Geocoder::Calculations.bearing_between([@coordinates["user_lat"], @coordinates["user_lng"]],[-31.23, 139]) # =>  "45"

    # raise params.inspect
    # # # To get the compass from bearing
    # @compass = Geocoder::Calculations.compass_point(@bearing) #=> "NE"

    # # #distance between points
    @distance = Geocoder::Calculations.distance_between([@coordinates["user_lat"], @coordinates["user_lng"]],[-31.23, 139]) # => "1.06" in miles

    # # #to km
    # @distance = Geocoder::Calcualtions.to_kilometers(@distance) # => "1.7" km

    @location = {"coords" => @coordinates, "bearing" => @bearing, "distance" => @distance};
    # @location << @coordinates << @compass << @distance


    render :json => @location
    # render :json => @bearing


  end

  def index
    # @bearing = Geocoder::Calculations.bearing_between([@coordinates["user_lat"], @coordinates["user_lng"]],[-31.23, 139]) # =>  "45"
    # raise params.inspect
    # @bearing = Geocoder::Calculations.bearing_between([@location.user_lat, @location.user_lng],[-31.23, 139])
	end

end