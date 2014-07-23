# == Schema Information
#
# Table name: friendships
#
#  id            :integer          not null, primary key
#  friendable_id :integer
#  friend_id     :integer
#  blocker_id    :integer
#  pending       :boolean          default(TRUE)
#

class Friendship < ActiveRecord::Base
  belongs_to :user
  belongs_to :friend, :class_name => "User"
end
