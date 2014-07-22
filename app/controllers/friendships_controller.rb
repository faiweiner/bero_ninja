class FriendshipsController < ApplicationController
	def index	
	end

  def create
  	@friendship = @current_user.friendships.build(:friend_id => params[:friend_id])
  	if @friendship.save
  		flash[:notice] = "Friend successfully added."
  		redirect_to friendships_path
  	else
  		render :action => 'new'
  	end
  end
   
  def new

		# raise params.inspect
  end

  def destroy
  	@friendship = Friendship.find(params[:id])
  	@friendship.destroy
  	flash[:notice] = "Successfully deleted friendship."
  	redirect_to friendships_path
  end

end