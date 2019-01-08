require 'pry'

# some sort of data => other hashes => basketball stats, game hash

# ruby is very nice to you

# "Alan Anderson" <= the name of a player
#
# a single player
# {
#   player_name: "Alan Anderson",
#   number: 0,
#   shoe: 16,
#   points: 22,
#   rebounds: 12,
#   assists: 12,
#   steals: 3,
#   blocks: 1,
#   slam_dunks: 1
# }
def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        }, {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        }, {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        }, {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        }, {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        }, {
          player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        }, {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        }, {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        }, {
          player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        },
        {
          cat_name: "Oreo"
        }
      ]
    }
  }
end

# Return => Array of player Hashes
def all_players
  home_players = game_hash[:home][:players] # Array of player Hashes
  away_players = game_hash[:away][:players] # Array of player Hashes
  home_players + away_players # Array of player Hashes
end

# Arguments:
#   player_name => String
# Return => a player Hashes
def find_player(player_name)
  # Array of player Hashes
  all_players.find do |player| # player Hash
    # String                # String
    player[:player_name] == player_name # Boolean
  end
end

# Arguments:
#   player_name => String
# Return => Number
def num_points_scored(player_name)
  # Hash       # String     #Symbol
  find_player(player_name)[:points] # Number
end

# Arguments:
#   player_name => String
# Return => Number
def shoe_size(player_name)
  # Hash       # String     #Symbol
  find_player(player_name)[:shoe] # Number
end

# Homework!
# map, select

# 1. give me all the players with assists > 5
# [{}, {}, {}]

# 2. give me an array of just the player names
# ["", "", ""]

# 3. Convert each one to an each

# Problem 1: Using hashes for everything => can't differentiate
# => The goal of these hashes is to represent different things in code
# Problem 2: Our methods cannot tell them apart either
# => our methods are just generic, there's no controlling what they are for

# Group them all together <= going to help us do this

reggie_evans = {
  player_name: "Reggie Evans",
  number: 30,
  shoe: 14,
  points: 12,
  rebounds: 12,
  assists: 12,
  steals: 12,
  blocks: 12,
  slam_dunks: 7
}

# PascalCase
# camelCase
# snake_case
# kebab-case
# a class is a type of object
# an instance of a class is one instance of that object
# => occurance, example
class BasketballPlayer # kind of like a blueprint
  # instance variable <= a variable that is tied to the instance
  # class variable <= store all the basketball players here

  @@players_array = [] # setup the default value for the class variable

  # yes => put these up top so it's easier to read

  # macro
  attr_reader :name #, :number, :shoe_size, :points, :rebounds, :assists, :steals, :blocks, :slam_dunks # writing your getter method(s)
  # attr_writer :name, :number, :shoe_size, :points, :rebounds, :assists, :steals, :blocks, :slam_dunks # write your setter methods

  puts "here"
  # binding.pry
  # this does both
  attr_accessor :number, :shoe_size, :points, :rebounds, :assists, :steals, :blocks, :slam_dunks

  puts "there"
  # binding.pry
  # def namessss
  #   binding.pry
  #   @namessss
  # end

  # special method that is run when you do ClassName.new
  def initialize(player_name, number, shoe, points, rebounds, assists, steals, blocks, slam_dunks)
    # binding.pry
    # CMD + D
    # CMD + Shift + Arrow
    # Arrow button
    # CMD + Arrow
    @name = player_name # this never really changes
    @number = number
    @shoe_size = shoe
    @points = points
    @rebounds = rebounds
    @assists = assists
    @steals = steals
    @blocks = blocks
    @slam_dunks = slam_dunks

    # since this is run every time I do .new
    # adds it for me, i will write the code here
    @@players_array << self
    # binding.pry
    # self is very special. it can be called anywhere
    # who called me => who called the method I'm in
      # exception, initialize <== the thing being made

  end

  # binding.pry
  # class method
  def self.players_array # BasketballPlayer.players_array
    @@players_array
  end
  # no shortcut

  # instance methods for my basketball player instance
  def slam_dunk
    # binding.pry
    puts "NIIIICEEE!!!"
    @slam_dunks += 1
    @points += 2
  end

  def layup

  end

  # class method <== we want to know what we can do with classes

# programming is creativity you can do anything!!!!

  # instance method
  # getters <= for getting instance variables
  # def name
  #   # to do whatever i want
  #   @name
  # end

  # instance method
  # setter method
  # def name=(name)
  #   # this will do whatever you want it to do
  #   # binding.pry
  #   # set the instance vairable to name
  #   @name = name
  # end

  # def number
  #   @number
  # end

  # def number=(new_number)
  #   @number = new_number
  # end

  # copy paste
  # programmers are lazzzzzy

  # maybe those mehtods come by default, from the class from object
end

b1 = BasketballPlayer.new("Sugar", 1, 14, 12, 12, 12, 12, 12, 7)
b2 = BasketballPlayer.new("Cinnamon", 2, 14, 12, 12, 12, 12, 12, 7)
# players_array = [b1, b2]

b3 = BasketballPlayer.new("Cinnamon 2", 2, 14, 12, 12, 12, 12, 12, 7)
# players_array << b3

# there must be a better way

# I kept a list of all the players somewhere
# so that I can run methods on that list

binding.pry

puts "bye bye!"
