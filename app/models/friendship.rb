# == Schema Information
#
# Table name: friendships
#
#  id        :integer          not null, primary key
#  user_id   :integer
#  friend_id :integer
#

class Friendship < ActiveRecord::Base
  belongs_to :user
  belogns_to :friend, :class_name => "User"
end
