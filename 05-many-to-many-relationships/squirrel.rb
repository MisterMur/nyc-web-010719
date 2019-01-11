class Squirrel
  attr_reader :color
  attr_accessor :name, :fur # , :trees never store arrays in these relationships

  @@all = [] # giant spreadsheet of squirrels

  def self.all
    @@all
  end

  # .new
  def initialize(color, name, fur)
    @color = color
    @name = name
    @fur = fur

    @@all << self # just a reference
  end

  def nut_houses
    # calculate it, it will figure it out
    # if it doesn't hold the information, it needs to find it
    # array of NutHouse instances
    NutHouse.all.select do |nh|
      nh.squirrel == self
    end
  end

  def trees
    # who to ask???
  end
end # end of Squirrel class
