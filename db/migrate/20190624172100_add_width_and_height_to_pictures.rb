class AddWidthAndHeightToPictures < ActiveRecord::Migration[5.2]
  def change
    add_column :pictures, :width, :integer
    add_column :pictures, :height, :integer
  end
end
