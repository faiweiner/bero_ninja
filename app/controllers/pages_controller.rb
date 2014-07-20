class PagesController < ApplicationController
  def index
    if @current_user.present?
      redirect_to locations_index_path
    end
  end
end