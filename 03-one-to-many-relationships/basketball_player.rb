class BasketballPlayer # this has to be capitalized
  # Macros => Writes the getter and setter methods for us.

  # getter + setter methods in one macro
  attr_accessor :number, :shoe_size, :points, :rebounds, :assists, :steals, :blocks, :slam_dunks

  # writes our getter methods
  attr_reader :name #, :number, :shoe_size, :points, :rebounds, :assists, :steals, :blocks, :slam_dunks
  # instance method => getter
  # jeff_adrien[:player_name] => jeff.player_name
  # def name
  #   @name
  # end

  # writes our setter methods
  # attr_writer :number, :shoe_size, :points, :rebounds, :assists, :steals, :blocks, :slam_dunks
  # instance method => setter
  # def name=(name)
  #   @name = name
  # end

  # Class Variables belong to the class they are defined in.
  # A place to store information pertinant to the entire
  # Player class.
  @@players_array = [] # Array of Player instances
  # ALL = [] # class constant, you cannot reassign it wholesale and change its type

  # This is the method called when we do Player.new
  # It creates a new _instance_ of a Player
  #   an instance => a moment
                 # String     Number  Number Number Number    Number   Number  Number  Number
  # BasketballPlayer.new => constructor method
  def initialize(player_name, number, shoe, points, rebounds, assists, steals, blocks, slam_dunks)
    # @instance_variable <= @ sign in front is an instance variable
    # instance variables, stay with the instance!
    @name = player_name
    @number = number
    @shoe_size = shoe # we don't have to match up the arg name with the instance variable name
    @points = points
    @rebounds = rebounds
    @assists = assists
    @steals = steals
    @blocks = blocks
    @slam_dunks = slam_dunks

    ps = points # local variable, disappears!

    @@players_array << self # self in the initialize method is the instance being made
  end

  # You write instance methods so your custom object, Player,
  # can do work specific to that type of object.
  # Hashes do Hashy things. Players to Playery things.
  # Example: A Player _instance_ can slam_dunk a basketball.
  def slam_dunk
    puts "NIIIIIICE!!!"
    @slam_dunks += 1
    two_pointer

    self # <= what is this?
      # who called it

    # self can be called anywhere
    # it will tell you who called the method you are in
    # So ask yourself, who called me? => That's self!
    #   self in an instance method is the instance that called it
    # Because we have access to self, the instance,
    # logically it makes sense that we can use other
    # instance methods in here!
  end

  def layup
    puts "Cool."
    self.two_pointer
  end

  # helper method
  def two_pointer
    @points += 2
  end

  ## PROBLEM SOLVED!
  # => We can now differentiate between different
  #    types of objects with their own unique attributes
  #    and their own unique methods!

  ################################
  ## NEW PROBLEM... (see below) ##
  ################################

  ## THE SOLUTION!

  # This is a Class method. Methods for the entire Class!
  # Called with BasketballPlayer.players_array
  def self.players_array
    @@players_array # in this class method, we are writing
          # a getter to retrieve the @@players_array class variable
  end


  # Arguments:
  #   player_name => String
  # Return => a player Hashes
  # Helper Method
  def self.find_player(player_name)
    # Array of BasketballPlayer instances
    @@players_array.find do |player| # player Hash
      # String                # String
      player.name == player_name # Boolean
    end
  end

  # Arguments:
  #   player_name => String
  # Return => Number

  # what does it do?
  # looks at the person and finds how many points they scored?

  # This is asking to find the points of a player with this given name.
  # => I don't know who the player is. I only know their name.
  def self.num_points_scored(player_name)
    # Hash       # String     #Symbol
    # binding.pry
    find_player(player_name).points # Number
  end



  ## QUESTION!
  #   Those Hashketball methods, where do they belong?
  # => Outside the class?
  # => Inside the class as instance methods?
  # => Inside the class as class methods?
  #
  #   Think about what work the method is meant to do.
  #   Think about whose responsibility it is to do those methods.
  #   Who should you ask to run those methods?
  # => ANSWER: ????

  # TODO: class methods!

end # end of Player class
