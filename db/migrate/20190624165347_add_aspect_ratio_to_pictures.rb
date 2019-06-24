class AddAspectRatioToPictures < ActiveRecord::Migration[5.2]
  def change
    add_column :pictures, :aspect_ratio, :float
  end
end
