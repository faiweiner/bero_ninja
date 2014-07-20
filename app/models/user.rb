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
#

class User < ActiveRecord::Base
  has_secure_password
  has_many :places
  has_many :friendships
  has_many :friends, :through => :friendships
end
