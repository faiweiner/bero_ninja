# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)
#  password_digest :string(255)
#  profile_picture :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#  is_online       :boolean
#  instagram_id    :string(255)
#

class User < ActiveRecord::Base
	# validates :username, :presence => true, :length => { :minimum => 3 }, :uniqueness => true
  has_secure_password
  has_many :places
  has_many :friendships
  has_many :friends, :through => :friendships
  has_many :inverse_friendships, :class_name => "Friendship", :foreign_key => "friend_id"
  has_many :inverse_friends, :through => :inverse_friendships, :source => :user
end
