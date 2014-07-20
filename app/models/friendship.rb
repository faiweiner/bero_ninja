class Friendship < ActiveRecord::Base
  belongs_to :user
  belogns_to :friend, :class_name => "User"
end