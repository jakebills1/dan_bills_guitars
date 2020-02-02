class AddThumbnailUrlToPictures < ActiveRecord::Migration[5.2]
  def change
    add_column :pictures, :thumbnail_url, :string
  end
end
