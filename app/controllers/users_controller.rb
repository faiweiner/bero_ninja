class UsersController < ApplicationController


	def index
		@users = User.all
	end

	def new
		@user = User.new  
	end

	def authorize
		redirect_to(Instagram.authorize_url(:redirect_uri => CALLBACK_URL)) 
	end

	def callback
		response = Instagram.get_access_token(params[:code], :redirect_uri => CALLBACK_URL)
		session[:access_token] = response.access_token
		existing_user = User.find_by(username: response.user.username)
		if existing_user && session[:user_id].nil? #if signed out and user already exists
      session[:user_id] = existing_user.id #sign in with id
      redirect_to(root_path)
    elsif existing_user.nil?
    	@user = User.new
    	session[:instagram_username] = response.user.username
			session[:profile_picture] = response.user.profile_picture
			session[:instagram_id] = response.user.id
		end
	end

	def create
		@user = User.new user_params
		if @user.save
			session[:user_id] = @user.id #auto-login
			raise params.inspect
			redirect_to user_path(@user.id)
		else
			render :new
		end
	end

	def edit
	end

	def show
		@user_ip = request.location
		@user = User.find params[:id]
		@places = @current_user.places
	end

	private

	def user_params
		params.require(:user).permit(:username, :password, :password_confirmation, :profile_picture, :instagram_id)
	end
end