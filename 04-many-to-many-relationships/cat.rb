class Cat
  attr_accessor :age, :color
  attr_reader :name

  @@all = []

  def self.all
    @@all
  end

  def initialize(name, color, age)
    @name = name
    @color = color
    @age = age

    @@all << self
  end

  def omg # plz no
    puts $lets_try
  end
end # end of Cat class
