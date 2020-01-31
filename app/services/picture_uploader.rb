class PictureUploader 
  attr_reader :cloud_image
  def initialize(file)
    @file = file
  end
  def upload
    @cloud_image = Cloudinary::Uploader.upload(
      @file,
      public_id: @file.original_filename,
      secure: true)
  end
end