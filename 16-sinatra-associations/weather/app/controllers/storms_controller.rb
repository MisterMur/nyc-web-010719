class StormsController < ApplicationController

  # INDEX
  # GET: /storms
  get "/storms" do
    # model
    @storms = Storm.all

    #response
    erb :"/storms/index.html"
  end

  # NEW
  # GET: /storms/new
  get "/storms/new" do
    # model
    # shhh 🤔🤫


    erb :"/storms/new.html"
  end

  # CREATE
  # POST: /storms
  post "/storms" do
    # binding.pry
    storm = Storm.create(params)
    # binding.pry
    redirect "/storms/#{storm.id}"
  end

  # SHOW
  # GET: /storms/5
  get "/storms/:id" do
    # model
    @storm = Storm.find(params[:id])
    erb :"/storms/show.html"
  end

  # GET: /storms/5/edit
  get "/storms/:id/edit" do
    erb :"/storms/edit.html"
  end

  # PATCH: /storms/5
  patch "/storms/:id" do
    redirect "/storms/:id"
  end

  # DELETE: /storms/5/delete
  delete "/storms/:id/delete" do
    redirect "/storms"
  end
end
