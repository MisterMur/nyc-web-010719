class StormsController < ApplicationController
  # index, show, new, edit, create, update, delete/destroy
  # skip_before_action :verify_authenticity_token

  # naming conventions are for the RESTful routes
  def index
    # model
    # byebug
    # we want all the storms
    @storms = Storm.all
    # response / view
    # erb :index <== sinatra
    # render :index
    # you can leave this out because if you don't get a render
    # it will assume you want to render a file with this method name
  end

  def show
    # model
    @storm = Storm.find(params[:id])
    # response / view
    render :show
  end

  def new
    # model

    # response / view
    # render :new
  end

  def edit
    # model

    # response / view

  end

  def create
    # model
    # byebug
    # don't do that. this is enforcing a "DONT SHOOT YOPRU FOOT RULE"
    @storm = Storm.create(storm_params)
    # response / view
    # render
    redirect_to storm_path(@storm)
    # redirect_to @storm # super magic!!!
  end

  def update
    # model

    # response / view

  end

  def destroy
    # model
    @storm = Storm.find(params[:id])
    @storm.delete
    # response / view
    redirect_to storms_path # "/storms"
  end

  private

  # strong params!
  def storm_params
    params.require("storm").permit(:name, :flavor, :victims)
  end
end
