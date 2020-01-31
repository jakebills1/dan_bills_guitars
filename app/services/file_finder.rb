class FileFinder
  attr_reader :files
  def initialize(params) 
    @files = []
    @params = params
    find_files
  end

  private

    def find_files
      file_counter = 0
      set_key
      while @params[@key] 
        @files.push(@params[@key])
        file_counter += 1
        set_key file_counter
      end
    end
      
    def set_key(counter = 0)
      @key = "file" + "#{counter}"
    end

end