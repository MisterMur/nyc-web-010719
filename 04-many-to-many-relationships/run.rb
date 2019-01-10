require 'pry'
require_relative './user'
require_relative './tweet'

# rubber ducking

u1 = User.new("Dan Abramov")
u2 = User.new("Someone Else")

# test data
t1 = Tweet.new("whasdkjfk;asdjfk", u1)
t2 = Tweet.new("another message", u2)
t3 = Tweet.new("I think reducers get a bad rep because of complexity baggage associated with all the other parts of Redux that they’re being taught with. Reducers will be a more important to React soon. I want to help explain why they make sense for local state and are *simpler* than setState.", u1)






binding.pry

puts "bye bye!"
