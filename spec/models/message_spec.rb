require 'rails_helper'

RSpec.describe Message, type: :model do
  context 'on creating' do 
    it 'requires all fields not to be nil' do 
      m = Message.create(:name => nil, :body => nil, :subject => nil, :email => nil)
      expect(m).to be_invalid
    end
    it 'requires email be a valid email' do
      m = Message.create(:name => "name", :body => "body", :subject => "subject", :email => "bademail")
      expect(m.errors[:email].length).to be > 0
    end
  end
end
