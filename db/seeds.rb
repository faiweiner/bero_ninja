User.destroy_all
Place.destroy_all
Location.destroy_all

u1 = User.create :username => "ros", :password => "ros", :password_confirmation => "ros"
u2 = User.create :username => "fai", :password => "fai", :password_confirmation => "fai"
u3 = User.create :username => "bill", :password => "bill", :password_confirmation => "bill"
u3 = User.create :username => "eli", :password => "eli", :password_confirmation => "eli"
u4 = User.create :username => "eric", :password => "eric", :password_confirmation => "eric"
u5 = User.create :username => "bob", :password => "bob", :password_confirmation => "bob"
u6 = User.create :username => "jill", :password => "jill", :password_confirmation => "jill"
u7 = User.create :username => "may", :password => "may", :password_confirmation => "may"
u8 = User.create :username => "june", :password => "june", :password_confirmation => "june"
u9 = User.create :username => "jane", :password => "jane", :password_confirmation => "jane"
u10 = User.create :username => "fon", :password => "fon", :password_confirmation => "fon"
u11 = User.create :username => "adam", :password => "adam", :password_confirmation => "adam"
u12 = User.create :username => "russ", :password => "russ", :password_confirmation => "russ"


p2 = Place.create :latitude => -33.862721, :longitude => 151.173475, :address => "The Welcome Hotel", :category => 'Pub', :favorite => true
p3 = Place.create :latitude => -33.860082, :longitude => 151.208894, :address => "Museum of Contemporary Art", :category => 'Art Gallery', :favorite => true

f1 = Location.create :user_id => u1.id, :latitude => -33.888122, :longitude => 151.213237
f2 = Location.create :user_id => u2.id, :latitude => -33.862721, :longitude => 151.173475
f3 = Location.create :user_id => u3.id, :latitude => -33.860082, :longitude => 151.208894

fs1 = Friendship.create :user_id => u1.id, :friend_id => u3.id
fs2 = Friendship.create :user_id => u3.id, :friend_id => u1.id

u1.places << p2 << p3

u2.places << p2 << p3

u3.places << p2 << p3
