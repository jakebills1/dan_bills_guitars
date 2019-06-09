class Api::PicturesController < ApplicationController
  def index
  end

  def show
  end

  def create
    binding.pry
    file = params[:file]
    guitar = Guitar.find(params[:guitar_id])
    # must loop through for each file in files
    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        user.image = cloud_image['secure_url']
        guitar.pictures.create(url: cloud_image['secure_url'])
      rescue => e
        render json: { errors: e }, status: 422
      end
    end
  end

  def update
  end

  def destroy
  end

  
end
