class Guitar < ApplicationRecord
  has_many :pictures, dependent: :destroy
end
