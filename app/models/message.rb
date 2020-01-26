class Message < ApplicationRecord
  validates :name, :email, :body, :subject, presence: true
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: [:create, :update] }
end
