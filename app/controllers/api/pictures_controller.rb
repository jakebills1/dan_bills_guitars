class Api::PicturesController < ApplicationController
  def index
  end

  def show
  end

  def create
    file_counter = 0
    file_key = "file".concat(file_counter.to_s).to_sym
    while params[file_key] != nil
      file = params[file_key]
      guitar = Guitar.find(params[:guitar_id])
      if file
        begin
          ext = File.extname(file.tempfile)
          cloud_image = Cloudinary::Uploader.upload(file,
           public_id: file.original_filename,
           secure: true,
           transformations: {})
          guitar.pictures.create(url: cloud_image['secure_url'], width: cloud_image['width'], height: cloud_image['height'])
        rescue => e
          render json: { errors: e }, status: 422
        end
      end
      file_counter += 1
      file_key = "file".concat(file_counter.to_s).to_sym
    end
  end

  def update
  end

  def destroy
  end

  
end
