class FriendshipsController < ApplicationController
	def index	
		@all_users = User.where.not(id: @current_user.id)
		@following = @current_user.friendships.all
		@following_array = []
		@following.each do |friendship|
			@following_array << friendship.friend.username
		end
		@followers = @current_user.inverse_friends
		@incoming_requests = Friendship.where(friend_id: @current_user.id)
		@incoming_requests.each do |friendship|
			requester = User.find(friendship.user_id).username
		end
	end

	def create
		@friendship = @current_user.friendships.build(:friend_id => params[:friend_id])
		if @friendship.save
			flash[:notice] = "Friend successfully added."
			redirect_to friendships_path
		else
			 flash[:error] = "Unable to add friend."
			redirect_to friendships_path
		end
	end
	 
	def new
	end

	def update
		friendship_id = params[:id]
		friendship_instance = Friendship.find_by(id: friendship_id)
		inverse_friendship_instance = Friendship.find_by(user_id: @current_user.id, friend_id: friendship_instance.user_id)
		if friendship_instance.friend_id == @current_user.id
			friendship_instance.approved = true
			inverse_friendship_instance = true
			flash[:notice] = "You and #{friendship_instance.friend.username} are now connected!"
		else
			raise "You are not the current user"
		end
		raise params

		flash[:notice] = "You and #{} are now connected!"
		redirect_to friendships_path

		# flash[:error] = "something went wrong and you were unable to create a friendship"
	end

	def show
		respond_to do |format|
			format.json { render :json =>  @article }
		end
	end

	def destroy
		@friendship = @current_user.friendships.find(params[:id])
		@friendship.destroy
		flash[:notice] = "Successfully deleted friendship."
		redirect_to :root
	end

end