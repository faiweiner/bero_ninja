# == Schema Information
#
# Table name: friendships
#
#  id        :integer          not null, primary key
#  user_id   :integer
#  friend_id :integer
#  approved  :boolean          default(FALSE)
#

class Friendship < ActiveRecord::Base
  belongs_to :user
  belongs_to :friend, :class_name => "User"
end
