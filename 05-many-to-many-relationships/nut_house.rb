class NutHouse
  attr_accessor :size, :twigs, :nuts
  attr_reader :squirrel, :tree # this one is going to be whatever the @instance_variable is named

  # each instance of a NutHouse represents one relationship between
  # one instance of a squirrel and one instance of a tree

  # meta programming

  @@all = [] # giant spreadsheet of squirrels

  def self.all
    @@all
  end

  # .new        # String  # Number  # Number
  def initialize(size, twigs, nuts, squirrel, tree)
    @size = size
    @twigs = twigs
    @nuts = nuts
    @squirrel = squirrel
    @tree = tree

    @@all << self # just a reference
  end


end # end of NutHouse class

# TEST IT!!!!
