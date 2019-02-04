class VictimsController < ApplicationController

  # GET: /victims
  get "/victims" do
    erb :"/victims/index.html"
  end

  # GET: /victims/new
  get "/victims/new" do
    # model
    @storms = Storm.all
    #resp
    erb :"/victims/new.html"
  end

  #CREATE
  # POST: /victims
  post "/victims" do
    binding.pry
    redirect "/victims"
  end

  # GET: /victims/5
  get "/victims/:id" do
    erb :"/victims/show.html"
  end

  # GET: /victims/5/edit
  get "/victims/:id/edit" do
    erb :"/victims/edit.html"
  end

  # PATCH: /victims/5
  patch "/victims/:id" do
    redirect "/victims/:id"
  end

  # DELETE: /victims/5/delete
  delete "/victims/:id/delete" do
    redirect "/victims"
  end
end
