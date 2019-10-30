class Api::PicturesController < ApplicationController
  def create
    # iterates over files sent in params ( named file0, file1, etc ), and uploads them to cloudinary, then saves them in Database
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
           secure: true)
          guitar.pictures.create(url: cloud_image['secure_url'], width: cloud_image['width'], height: cloud_image['height'])
        rescue => e
          # if file did not save to database, should delete from cloudinary
          if cloud_image
            Cloudinary::Uploader.destroy(cloud_image.public_id)
          end
          render json: { errors: e }, status: 422
        end
      end
      # increments file name (file0 to file1), which will be the next params key, or will stop loop if not present
      file_counter += 1
      file_key = "file".concat(file_counter.to_s).to_sym
    end
  end
end
