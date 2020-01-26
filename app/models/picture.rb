class Picture < ApplicationRecord
  belongs_to :guitar
  validates :url, :width, :height, presence: true
  validates :width, :height, numericality: { greater_than: 0 }
  validates :url, url: true 
end
