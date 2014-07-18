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
  belongs_to :user
end
