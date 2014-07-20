User.destroy_all

u1 = User.create :username => "Ros", :password => "ros", :password_confirmation => "ros"
u2 = User.create :username => "Fai", :password => "fai", :password_confirmation => "fai"
u3 = User.create :username => "Bill", :password => "bill", :password_confirmation => "bill"


