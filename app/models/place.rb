# == Schema Information
#
# Table name: places
#
#  id        :integer          not null, primary key
#  latitude  :string(255)
#  longitude :string(255)
#  user_id   :integer
#  address   :string(255)
#  category  :string(255)
#  favorite  :boolean
#

class Place < ActiveRecord::Base
  
end
