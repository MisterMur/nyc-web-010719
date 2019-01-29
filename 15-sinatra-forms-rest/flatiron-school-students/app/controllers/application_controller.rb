require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
    # look at all the request, look at params
    # look for a _method key
    # if that key exists and has some sort of value, specifically an http verb
    # it will route to the correct controller action for that verb
  end

  get "/" do
    puts "did I hit homepage"
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
    puts "did I hit index"
    # model
    @students = Student.all

    # response / view
    erb :index # rails pattern
  end

  # whjat about me?>? => rails
  get '/students/new' do
    puts "did I hit new"
    # model
    # response / view
    erb :new
  end

  get '/students/:id' do
    puts "did I hit show"
    # model
    @student = Student.find(params["id"]) # params => IndifferentHash, it's hash-like, but it's not a hash.

    # response /view
    erb :show
  end

  # whatever happens in the request, stays in the request = HTTP is stateless
  # for creating
  post '/students' do
    puts "did I hit post students"
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

  # update routes
  # /students/1334234/edit
  get '/students/:id/edit' do
    puts "did I hit edit"
    # model
    # when we are trying to edit something, do we need data?
    # we do... specifically what data?
    # that person we are trying to edit
    @student = Student.find(params[:id])
    # response / view
    erb :edit
  end

  patch '/students/:id' do
    # binding.pry # what up yo????
    # model
    # update a student
    @student = Student.find(params[:id])
    @student.update(params[:student])

    # response
    redirect "/students/#{@student.id}"
  end

end
