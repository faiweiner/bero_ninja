# == Schema Information
#
# Table name: friends
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  latitude   :string(255)
#  longitude  :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Friend < ActiveRecord::Base
  belongs_to :user
end
