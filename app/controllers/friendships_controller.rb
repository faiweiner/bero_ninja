class FriendshipsController < ApplicationController
	def index	
		# Everyone in the DB except for the current user
		@all_users = User.where.not(id: @current_user.id)

		# Everyone the user follows (pending their approval)
		@following = @current_user.friendships.where(approved: false)
		# For All_users status check

		# Everyone who follows the user
		@followers = @current_user.inverse_friends

		# Pending friendship request
		@incoming_requests = Friendship.where(friend_id: @current_user.id).where(:approved => false)
		@incoming_requests.each do |friendship|
			requester = User.find(friendship.user_id).username
		end
		# MUTUAL FRIENDSHIP
		@mutual_friendships = Friendship.where(approved: true, friend_id: @current_user)
	end

	def new
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
	 
	def update
		friendship_instance = Friendship.find_by(id: params[:id])
		# If @current hasn't tried to follow the requester then create a new friendship instance for the @current targeting the requester
		if Friendship.find_by(user_id: @current_user.id, friend_id: friendship_instance.user_id) == nil
			new_friendship = @current_user.friendships.build(friend_id: friendship_instance.user_id)
			new_friendship.save
			inverse_friendship_instance = new_friendship
		else
			inverse_friendship_instance = Friendship.find_by(user_id: @current_user.id, friend_id: friendship_instance.user_id)
		end
		
		if friendship_instance.friend_id == @current_user.id
			friendship_instance.approved = true
			inverse_friendship_instance.approved = true
			friendship_instance.save
			inverse_friendship_instance.save
			# raise "Im about to save mutual friendships!"
			render :json =>  { :status => 'okay', :notice => "You and #{inverse_friendship_instance.friend.username} are now connected!" }
		else
			render :json =>  { :status => 'not okay', :notice => "Something went wrong and we can't do this shit." }
		end
	end

	def destroy
		friendship = @current_user.friendships.find(params[:id])
		inverse_friendship = Friendship.find_by(friend_id: @current_user.id, user_id: friendship.friend_id)
		inverse_friendship.destroy
		friendship.destroy
		flash[:notice] = "Successfully deleted friendship."
		redirect_to :root
	end

	def search
		search_term = params[:user_search]
		@search_results = User.where(username: search_term).first
		render :json => @search_results
	end
end