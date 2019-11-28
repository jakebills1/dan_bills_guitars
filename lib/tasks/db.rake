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

end
