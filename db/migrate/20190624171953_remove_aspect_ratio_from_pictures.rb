class RemoveAspectRatioFromPictures < ActiveRecord::Migration[5.2]
  def change
    remove_column :pictures, :aspect_ratio, :float
  end
end
