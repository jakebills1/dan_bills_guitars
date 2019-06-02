class Api::GuitarsController < ApplicationController
  @company_email = 'danbillsguitars@gmail.com'
  before_action :set_guitar, only: :destroy
  def index
    guitars = Guitar.all
    data = []
    guitars.each do |guitar|
      ob = {
        name: guitar.name,
        price: guitar.price, 
        description: guitar.description, 
        pictures: guitar.pictures,
        id: guitar.id
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
  end

  def update
  end

  def destroy
    @guitar.destroy 
    render json: { message: "deleted"}
  end
  private
    def set_guitar
      @guitar = Guitar.find(params[:id])
    end
  
end
