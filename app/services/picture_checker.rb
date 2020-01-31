class PictureChecker
  attr_reader :message
  attr_reader :status
  def initialize(pictures)
    @pictures = pictures
    check_pictures
  end

  private
    def check_pictures
      if @pictures.all? { |p| p.persisted? }
        @message = { message: "Pictures added!" }
        @status = 200
      else 
        @message = { message: "Could not add pictures" }
        @status = 422
      end
    end
end