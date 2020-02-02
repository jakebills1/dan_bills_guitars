namespace :db do
  desc "removes pictures 6-10 from ziricote om"
  task remove_excess_pictures: :environment do
    if Guitar.exists?(40)
      g = Guitar.find(40)
      if g.pictures.count == 11 
        g.pictures[10].delete
        g.pictures[9].delete
        g.pictures[8].delete
        g.pictures[7].delete
        g.pictures[6].delete
      end
    end
  end

  desc "adds thumbnail urls to pictures"
  task add_thumbnail: :environment do 
    if Picture.count > 0
      Picture.where.not(url: nil).each do |pic|
        pic.update(thumbnail_url: pic.url[0..49] + "c_thumb,w_180/" + pic.url[50..])
      end
    end
  end

end
