class Api::MessagesController < ApplicationController
  def create
    message = Message.new(message_params)
    if message.save
      render json: message
    else
      render json: message.errors
    end
  end

  def index
    render json: Message.all 
  end
  
  private
  
  def message_params
    params.require(:message).permit(:name, :email, :body)
  end
end
