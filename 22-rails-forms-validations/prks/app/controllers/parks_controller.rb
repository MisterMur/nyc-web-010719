class ParksController < ApplicationController
  def index
    # model
    @parks = Park.all
    # response
    # render :indezzcdafdsfgdsaf
  end

  def new
    # model?
    # it depends =>
    # do you want to build that form manually form_tag
    # do you want to build it with the magic! of form_for
    @park = Park.new
    # byebug
    # view
  end

  def create # post to /parks
    @park = Park.new(park_params)
    # go back to the form, try again
    # if this worked
    if @park.valid?
      @park.save
      redirect_to @park # show, id = nil, makes no sense to me, but hey, someone wrote it
    else

      # go back to the form

      # how do i get my errors to a new request????
      flash[:errors] = @park.errors.full_messages
      flash[:other_nonsense] = 23543543
      redirect_to new_park_path # whacky magic???
      # render :new # /parks
    end
    # redirect_to "http://learn.co"
  end

  def show
    @park = Park.find(params[:id])
  end

  private

  def park_params
    params.require(:park).permit(:name, :location, :category)
  end
end
