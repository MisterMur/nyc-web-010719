class Api::V1::RappersController < ApplicationController

  def index
    # model
    @rappers = Rapper.all

    # response
    render json: @rappers, status: :ok
  end


  def show
    @rapper = Rapper.find(params[:id])
    render json: @rapper, status: :ok
  end

  def create

    #model
    @rapper = Rapper.create(rapper_params)
    render json: @rapper, status: :created
  end


 private

 # strong params 💪 need to whitelist attribuate because the internet is scary and full of HaX0rz
  def rapper_params
    params.require(:rapper).permit(:rap_name,:albums,:hood)
  end

end
