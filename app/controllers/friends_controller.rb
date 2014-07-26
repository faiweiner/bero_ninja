class FriendsController < ApplicationController

  def index
    @friends = @current_user.friends
  end

  def create
  end

  def new
  end

  def lookup
    @friend = User.find params[:id]

    @coordinates = {"user_lat" => params[:user_lat], "user_lng" => params[:user_lng]}
    # binding.pry
    @bearing = Geocoder::Calculations.bearing_between([@coordinates["user_lat"], @coordinates["user_lng"]],[@friend.locations.last.latitude, @friend.locations.last.longitude ]) # =>  "45"
    # @bearing = Geocoder::Calculations.bearing_between([@coordinates["user_lat"], @coordinates["user_lng"]],[-33.8587, 151.2140]) # =>  "45"
    # # # To get the compass from bearing
    @compass = Geocoder::Calculations.compass_point(@bearing) #=> "NE"

    # # #distance between points
    # @distance = Geocoder::Calculations.distance_between([@coordinates["user_lat"], @coordinates["user_lng"]],[-33.8587, 151.2140]) # => "1.06" in miles
    @distance = Geocoder::Calculations.distance_between([@coordinates["user_lat"], @coordinates["user_lng"]],[@friend.locations.last.latitude, @friend.locations.last.longitude ]) # => "1.06" in miles
    # # #to km
    @distance= Geocoder::Calculations.to_kilometers(@distance) # => "1.7" km

    @timestamp = @friend.locations.last.updated_at
    @timestamp = @timestamp
    @location = {"coords" => @coordinates, "bearing" => @bearing, "distance" => @distance, "compass" => @compass, "timestamp" => @timestamp};
    
    # Updating the user location to the database
    @current_user.locations.first.update(:latitude => @coordinates["user_lat"], :longitude => @coordinates["user_lng"])


    render :json => @location
    
  end

  def show
    @friend = User.find params[:id]
    # binding.pry
  end

  private

  # def update
  #   update_user_loation = Location.new( :latitude => @coordinates["user_lat"], :longitude => @coordinates["user_lng"])
  #   @current_user.locations << update_user_location
  # end

  def check_if_logged_in
    redirect_to(root_path) unless @current_user
  end
end