class AddYearToGuitars < ActiveRecord::Migration[5.2]
  def change
    add_column :guitars, :year, :integer
  end
end
