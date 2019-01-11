class Tree
  attr_reader :species

  @@all = [] # giant spreadsheet of squirrels

  def self.all
    @@all
  end

  # .new
  def initialize(species)
    @species = species

    @@all << self # just a reference
  end

  def nut_houses
    NutHouse.all.select do |nh|
      nh.tree == self
    end
  end

end # end of Tree class
