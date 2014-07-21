class PagesController < ApplicationController
  def index
    if @current_user.present?
      redirect_to(user_path(@current_user.id))
    end
  end
end