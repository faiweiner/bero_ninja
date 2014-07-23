# == Schema Information
#
# Table name: locations
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  latitude   :float
#  longitude  :float
#  created_at :datetime
#  updated_at :datetime
#

class Location < ActiveRecord::Base
  belongs_to :user
end
