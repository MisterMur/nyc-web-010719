require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  # RESTful Routes
  # CRUD Actions / HTTP Verb
  #                       resource => students table
  # RESTful Route Name       Route/Path/Resource     CRUD             HTTP Verb
  # Index page           =>  /students            => READ           => GET
  # Show page            =>  /students/:id        => READ           => GET

  # New page             =>  /students/new        => READ = CREATE  => GET
  # Create route         =>  /students            => CREATE         => POST

  # stop here

  # Edit page            =>  /students/:id/edit   => READ = UPDATE  => GET
  # Update route         =>  /students/:id        => UPDATE         => PATCH (PUT)

  # Delete(Destroy) route=>  /students/:id        => DELETE         => DELETE

  # in the controller => the go between for the model and view
  get '/students' do
    # model
    @students = Student.all

    # response / view
    erb :index # rails pattern
  end

  # whjat about me?>? => rails
  get '/students/new' do
    # model
    # response / view
    erb :new
  end

  get '/students/:id' do
    # model
    @student = Student.find(params["id"]) # params => IndifferentHash, it's hash-like, but it's not a hash.

    # response /view
    erb :show
  end

  # whatever happens in the request, stays in the request = HTTP is stateless
  # for creating
  post '/students' do
    # model
    # create la student
    # Student.create()
    # binding.pry
    # Student.create({ name: params["nameynamename"], age: params["age"], module: params["module"], worth: params["worth"] })
    @student = Student.create(params) # so long as they are all matched up nicely

    # response / view
    # erb :show
    # the user experience is broken
    # super interesting, cause you need to think about how r-r works
      # make a successful with a link , but good UX?
      # something to send them to the url for this student's id
    redirect "/students/#{@student.id}"
    # request => POST
    # response => redirect => Status Code 3XX response => the browser will receive it
    # request => GET to that URL it got
    # response => erb :show
  end

end
