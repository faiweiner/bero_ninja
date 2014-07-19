class LocationsController < ApplicationController

	def lookup
		@location = {"user_lat" => params[:user_lat], "user_lng" => params[:user_lng]}
		render :json => @location
	end

	def index

	end

end