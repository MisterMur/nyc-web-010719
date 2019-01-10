class BasketballPlayer
  attr_accessor :number, :shoe_size, :points, :rebounds, :assists, :steals, :blocks, :slam_dunks, :team
  attr_reader :name

  @@all = []


  # Homework
  # map, select

  # 1. give me all the players with assists > 5
  # [{}, {}, {}]
  # both, interesting [5, 6, 7, 2]
  # select => grab everyone that fits this condition/category
  def self.all_high_assist_players
    @@all.select do |player|
      player.assists > 5
    end

  # 2. give me an array of just the player names
  # ["", "", ""]
  # map => [5, 6, , 5] for changing things (collect)
  def self.player_names
    @@all.map do |player|
      player.name
    end
  end
  # reduce / inject # Why?

  # find / detect # Ruby way

  # 3. Convert each one to an each


  # The bad way to handle one to many on the belongs_to side.
  def team
    Team.all.find do |team| # Team instance
      # find your player, see if they are in your list of players
      team.players.include?(self) # what do i want to look for?
    end
  end

  def initialize(player_name, number, shoe, points, rebounds, assists, steals, blocks, slam_dunks, team)
    @name = player_name
    @number = number
    @shoe_size = shoe
    @points = points
    @rebounds = rebounds
    @assists = assists
    @steals = steals
    @blocks = blocks
    @slam_dunks = slam_dunks
    @team = team

    @@all << self
  end

  def slam_dunk
    puts "NIIIIIICE!!!"
    @slam_dunks += 1
    two_pointer
  end

  def layup
    puts "Cool."
    self.two_pointer
  end

  def two_pointer
    @points += 2
  end

  def self.all
    @@all
  end

  def self.find_player(player_name)
    @@players_array.find do |player|
      player.name == player_name
    end
  end

  def self.num_points_scored(player_name)
    find_player(player_name).points
  end
end # end of BasketballPlayer class
