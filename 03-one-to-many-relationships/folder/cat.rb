class Cat
  attr_accessor :age, :color # diown the middle... the person you ask? your boss
  attr_reader :name

  @@all = [] # is something leading up to databases

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
