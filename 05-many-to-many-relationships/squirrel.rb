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
    # NutHouse => Single Source of Truth => because nobody else knows
    # every instance of a nuthouse represents one relationship

    # Specifically, we want to know about OUR trees
    # NutHouse.all.select do |nh|
    #   nh.squirrel == self
    # end

    # array of NutHouse instances
    # map <- we want to change that array to the data we want
    # binding.pry

    # self.nut_houses => referrring to that method => return an array of NutHouse instances

    self.nut_houses.map do |nh| # NutHouse instance
      nh.tree
    end
      # I want to know my trees

  end
end # end of Squirrel class
