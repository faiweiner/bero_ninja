User.destroy_all
Place.destroy_all
Location.destroy_all

u1 = User.create :username => "Ros", :password => "ros", :password_confirmation => "ros"
u2 = User.create :username => "Fai", :password => "fai", :password_confirmation => "fai"
u3 = User.create :username => "Bill", :password => "bill", :password_confirmation => "bill"


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