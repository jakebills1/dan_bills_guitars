class Api::MessagesController < ApplicationController
  before_action :set_message, only: :destroy
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

  def destroy
    @message.destroy
  end
  
  private
  
  def message_params
    params.require(:message).permit(:name, :email, :body)
  end

  def set_message
    @message = Message.find(params[:id])
  end
end
