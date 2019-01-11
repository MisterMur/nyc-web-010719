require 'pry'
require_relative './user'
require_relative './tweet'
require_relative './tree'
require_relative './squirrel'
require_relative './nut_house' # this is a nest

# rubber ducking

u1 = User.new("Dan Abramov")
u2 = User.new("Someone Else")

# This just test code:
s1 = Squirrel.new("brown", "Rocky", "soft")
s2 = Squirrel.new("black and grey", "Alvin", "course")

t1 = Tree.new("maple")
t2 = Tree.new("elm")
t3 = Tree.new("redwood")

nh1 = NutHouse.new("big", 1, 5, s1, t1)
nh2 = NutHouse.new("big", 1, 5, s2, t1)
nh3 = NutHouse.new("small", 0, 1, s1, t2)

# s1.nut_houses
# nh1.squirrel


binding.pry

puts "bye bye!"
