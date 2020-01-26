require 'rails_helper'

RSpec.describe Picture, type: :model do
  context 'on creating' do
    it 'requires all field to be present' do
      p = Picture.create(:width => nil, :height => nil, :url => nil)
      expect(p).to be_invalid
    end
    it 'requires width and height to be greater than 0' do
      p = Picture.create(:width => -1, :height => -1, :url => "www.test.com")
      expect(p.errors[:width].length).to be > 0
      expect(p.errors[:height].length).to be > 0
    end
    it 'requires valid url' do
      p = Picture.create(:width => 1, :height => 1, :url => "badurl")
      expect(p.errors[:url].length).to be > 0
    end
  end
end
