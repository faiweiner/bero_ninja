# == Schema Information
#
# Table name: places
#
#  id        :integer          not null, primary key
#  latitude  :float
#  longitude :float
#  user_id   :integer
#  address   :string(255)
#  category  :string(255)
#  favorite  :boolean
#

class Place < ActiveRecord::Base
  before_save :geocode
  belongs_to :user

  private
  def geocode
    result = Geocoder.search(self.address).first
    if result.present?
      self.latitude = result.latitude
      self.longitude = result.longitude
    end
  end
end
