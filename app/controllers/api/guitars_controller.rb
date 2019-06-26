class Api::GuitarsController < ApplicationController
  @company_email = 'danbillsguitars@gmail.com'
  before_action :set_guitar, only: [:destroy, :update]
  def index
    guitars = Guitar.all
    data = []
    guitars.each do |guitar|
      ob = {
        name: guitar.name,
        price: guitar.price, 
        description: guitar.description, 
        pictures: guitar.pictures,
        id: guitar.id,
        year: guitar.year
      }
      data << ob

    end
    render json: data.to_json
  end

  def email
    mail(:to => 'danbillsguitars@gmail.com', :body => params[:message])
  end

  def show
  end

  def create
    guitar = Guitar.new(guitar_params)
    binding.pry
    if guitar.save
      render json: guitar
    else
      render json: guitar.errors
    end
  end

  def update
    if @guitar.update(guitar_params)
      render json: @guitar
    else
      render json: @guitar.errors
    end
  end

  def destroy
    @guitar.destroy 
    render json: { message: "deleted"}
  end
  private
    def set_guitar
      @guitar = Guitar.find(params[:id])
    end
    def guitar_params
      params.require(:guitar).permit(:name, :price, :description, :year)
    end
  
end
