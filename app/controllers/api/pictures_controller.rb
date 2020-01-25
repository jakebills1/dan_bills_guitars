class Api::PicturesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_file
  before_action :set_guitar

  def create
    file_counter = 0
    pictures = []
    while @file != nil
      begin
        cloud_image = Cloudinary::Uploader.upload(@file,
          public_id: @file.original_filename,
          secure: true)
        pictures.push({ url: cloud_image['secure_url'], width: cloud_image['width'], height: cloud_image['height'] })
      rescue => e
        # if file did not save to database, should delete from cloudinary
        if cloud_image
          Cloudinary::Uploader.destroy(cloud_image.public_id)
        end
      end
      file_counter += 1
      set_file file_counter
    end
    pictures = @guitar.pictures.create(pictures)
    if pictures.all? { |p| p.persisted? }
      render json: { message: "Successfully added pictures" }
    else 
      render json: { message: "Could not add pictures"}, status: 422
    end
  end

  private
    def set_guitar
      @guitar = Guitar.find(params[:guitar_id])
    end

    def set_file(counter = 0)
      file_key = "file".concat(counter.to_s).to_sym
      @file = params[file_key]
    end
end
