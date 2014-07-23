class FriendshipsController < ApplicationController
	def index	
		@all_users = User.all
    # raise params.inspect
		# @all_friends = @current_user.friendships.all
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

  def destroy
  	@friendship = @current_user.friendships.find(params[:id])
  	@friendship.destroy
  	flash[:notice] = "Successfully deleted friendship."
  	redirect_to :root
  end

end