# User.destroy_all
Place.destroy_all

u1 = User.create :username => "Ros", :password => "ros", :password_confirmation => "ros"
u2 = User.create :username => "Fai", :password => "fai", :password_confirmation => "fai"
u3 = User.create :username => "Bill", :password => "bill", :password_confirmation => "bill"

p1 = Place.create :latitude => -33.888122, :longitude => 151.213237, :address => "Four Ate Five", :category => 'Cafe', :favorite => true
p2 = Place.create :latitude => -33.862721, :longitude => 151.173475, :address => "The Welcome Hotel", :category => 'Pub', :favorite => true
p3 = Place.create :latitude => -33.860082, :longitude => 151.208894, :address => "Museum of Contemporary Art", :category => 'Art Gallery', :favorite => true

# u1.places << p1 << p2 << p3