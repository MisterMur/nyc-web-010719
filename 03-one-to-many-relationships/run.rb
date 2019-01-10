require 'pry'
require_relative './basketball_player'
require_relative './folder/cat'
require_relative './team'

$lets_try = 1

# name, colors, players
t1 = Team.new("Brooklyn Nets", ["black", "white"]) #, BasketballPlayer.players_array[0..4])
t2 = Team.new("Charlotte Hornets", ["turquoise", "purple"]) #, BasketballPlayer.players_array[5..9])

# p1 = BasketballPlayer.new("Alan Anderson", 0, 16, 22, 12, 12, 3, 1, 1, t1)
p2 = BasketballPlayer.new("Reggie Evans", 30, 14, 12, 12, 12, 12, 12, 7, t1)
p3 = BasketballPlayer.new("Brook Lopez", 11, 17, 17, 19, 10, 3, 1, 15, t1)
p4 = BasketballPlayer.new("Mason Plumlee", 1, 19, 26, 12, 6, 3, 8, 5, t1)
p5 = BasketballPlayer.new("Jason Terry", 31, 15, 19, 2, 2, 4, 11, 1, t1)
p6 = BasketballPlayer.new("Jeff Adrien", 4, 18, 10, 1, 1, 2, 7, 2, t2)
p7 = BasketballPlayer.new("Bismak Biyombo", 0, 16, 12, 4, 7, 7, 15, 10, t2)
p8 = BasketballPlayer.new("DeSagna Diop", 2, 14, 24, 12, 12, 4, 5, 5, t2)
p9 = BasketballPlayer.new("Ben Gordon", 8, 15, 33, 3, 2, 1, 1, 0, t2)
p10 = BasketballPlayer.new("Brendan Haywood", 33, 15, 6, 12, 12, 22, 5, 12, t2)

c1 = Cat.new("Oreo", "black and white", 8)


# remove alan anderson from his team?
# we have to go through every team
# look at the list, then delete him if he is in that list

binding.pry

puts "bye bye!"
