# controls the application
# Controller
class ApplicationController < Sinatra::Base
  set :views, 'app/views'
  # set :method_override, true

  # TDD => Test Driven Dev
  # BDD => Behavioral Driven Dev
  # EDD => Error Driven Dev

  # TODO create a route to root/home render home
  # get => Request, HTTP Verb part => GET
  get '/' do
    # "<h1>Hello World !!!!!</h1>"
    erb :something
  end

  # TODO all books
  # Index page for Books
  # follow MVC
  get('/books') do
    # model
    @books = Book.all
    # response => view
    erb :index
  end


  # TODO Individual book
  get '/books/:id' do
    # params => { id => "new" }
    # model
    @book = Book.find(params["id"])

    # view/response
    erb :show
  end


end
