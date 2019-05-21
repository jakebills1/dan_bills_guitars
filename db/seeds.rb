guitar_names = ["archtop", "auditorium", "cigar-box", "resonator", "jumbo", "bass", "martin style", "parlor", "classical", "dreadnought"]
guitar_names.each do |guitar_name|
  g = Guitar.create(name: guitar_name, price: 2450.0, description: Faker::Lorem.sentence)
  g.pictures.create(url: Faker::LoremFlickr.image("300x300", ['#{g.name}']))
end
