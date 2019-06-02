guitar_names = ["archtop", "auditorium", "cigar-box", "resonator", "jumbo", "bass", "martin style", "parlor", "classical", "dreadnought"]
guitar_names.each do |guitar_name|
  g = Guitar.create(name: guitar_name, price: 2450.0, description: Faker::Lorem.sentence)
  g.pictures.create(url: Faker::LoremFlickr.image("300x300", ['#{g.name}']))
end
baritone = Guitar.create(name: "Baritone", price: 2000.0, description: "Long scale baritone guitar made with exotic wood")
baritone.pictures.create(url: "https://i.imgur.com/L0mDhqI.jpg")
baritone.pictures.create(url: "https://i.imgur.com/0Z9bAUf.jpg")
baritone.pictures.create(url: "https://i.imgur.com/V0pwiG3.jpg")