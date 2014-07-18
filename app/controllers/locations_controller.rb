class LocationsController < ApplicationController

	def lookup
		@user_lat = params[:user_lat]
		@user_lng = params[:user_lat]
	end
end