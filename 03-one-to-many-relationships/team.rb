class Team
  attr_accessor :name, :colors #, :players

  @@all = []

  def self.all
    @@all
  end

  def initialize(name, colors) # , players)
    @name = name
    @colors = colors
    # @players = players

    @@all << self
  end

  def players
    # Who do I ask now?
    BasketballPlayer.all.select do |bp|
      # are you on my team?
      # binding.pry
      bp.team == self # what is this something?
    end


  end
end # end of Team class
