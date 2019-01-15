require 'pry'
require_relative './comedian'
require_relative './joke'
require_relative './subject'
puts "hello world"

joes_fav_comedian = Comedian.new("")
jerry = Comedian.new("Jerry Seinfeld")

politics = Subject.new("politics")
airplanes = Subject.new("zairplanes")

joke1 = Joke.new(jerry, politics, "Whats the deal with politics")
joke2 = Joke.new(joes_fav_comedian, politics, "")
joke3 = Joke.new(jerry, airplanes, "Whats the deal with airplanes")
Pry.start
false
