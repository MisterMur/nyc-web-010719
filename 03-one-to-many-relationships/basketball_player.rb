class BasketballPlayer
  attr_accessor :number, :shoe_size, :points, :rebounds, :assists, :steals, :blocks, :slam_dunks, :team
  attr_reader :name #, :number, :shoe_size, :points, :rebounds, :assists, :steals, :blocks, :slam_dunks


  # what can we do?
  # go back to the Team
  # find your player
  # then you'l;l know the team you're under
  # def team
  #   # each 2
  #   # find 8
  #   # map 0
  #   # select 5
  #   Team.all.find do |team| # Team instance
  #     # condition
  #     # find your player, see if they are in your list of players
  #     team.players.include?(self) # what do i want to look for?
  #   end
  # end

  @@all = []

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

    ps = points

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

end
