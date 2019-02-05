class CitiesController < ApplicationController
  before_action :find_city, only: [:show, :edit, :update, :destroy]

  def index
    @cities = City.all
  end

  def show
    render :show
  end

  def new
    @city = City.new
  end

  def edit
  end

  def create
    @city = City.create(city_params)
    redirect_to city_path(@city)
  end

  def update
    @city.update(city_params)
    redirect_to @city # city_path(@city)
  end

  def destroy
    @city.delete
    redirect_to cities_path # "/cities"
  end

  private

  # strong params!
  def city_params
    params.require("city").permit(:name, :population)
  end

  def find_city
    @city = City.find(params[:id])
  end
end
