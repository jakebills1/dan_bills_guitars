class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.belongs_to :guitar, foreign_key: true
      t.string :url

      t.timestamps
    end
  end
end
