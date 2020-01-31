class Api::PicturesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_guitar

  def create
    file_counter = 0
    pictures = []
    raw_pictures = FileFinder.new(params).files
    raw_pictures.each do |pic|
      uploader = PictureUploader.new(pic)
      uploader.upload
      pictures.push({ url: uploader.cloud_image['secure_url'], width: uploader.cloud_image['width'], height: uploader.cloud_image['height'] })
    end
    pictures = @guitar.pictures.create(pictures)
    checker = PictureChecker.new(pictures)
    render json: { message: "#{checker.message}"}, status: checker.status
  end

  private
    def set_guitar
      @guitar = Guitar.find(params[:guitar_id])
    end
end

