class AddThumbnailToPicture < ActiveRecord::Migration[5.2]
  def change
    add_column :pictures, :thumbnail, :string
  end
end
