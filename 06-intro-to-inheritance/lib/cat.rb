# hmm...
# Cat & Dog but not Fish
# walk

# Don't try to abstract away @@all
# It won't work like you think.

# OOP - Modules, Composition
# Predicting the Future
class Cat < Pet
  include ModuleName::InstanceMethods # pulls all methods in as instance methods
  extend ModuleName::ClassMethods # pulls them in as class methods (self.)

  attr_accessor :hairball_status
  # understanding what to abstract

  # def walk
  #   puts "I am walking."
  # end

  # def initialize(name, hairball_status)
  #   @hairball_status = hairball_status
  #   @name = name # really does run
  #   # puts "interesting...?? #{@name}"
  #   super(name) # throws in everything
  #   # puts "interesting...?? #{@name}"
  #   # it's not until you have a lot of code where this becomes a huge benefit
  # end

  def be_nervous(what)

    # omg = 1
    puts "Cats are always nervous, #{what}"
    super #(what) # if the number of arguemnts match, it will autopmatically pass them up for you
    binding.pry
     # Undefined
    # method lookup chain
    # local variable
    # self.omg
    # look at the parent, try to run omg
    # keep going
    # throw an error =>
      # NoMethodError
      # NameError
    self.be_scared

    "0"
  end

  # def omg
  #   "does something else"
  # end


  # cat only attribute
  # hairball_status
  def initialize(name, hairball_status)
    @hairball_status = hairball_status
    # I passed in a name, it came in as hairball_status.
    # The parent class's code does not run.
    puts "interesting...?? #{name}"
    binding.pry # oh why

    # puts "really interesting...?"
    # binding.pry
    # @name = name
    # @mood = "nervous"

    super(name) # this will run the equivalently named method from the parent class

    puts "oooohhhh.... I know..."
    # Aside: If binding.pry is last, sometimes, not always, it just gets passed over.
  end
  # if you write a method with the same exact name
  # it will overwrite the original method

  # there is a lot of things to customize
  # yes, but let's do a method first
  def meow
    # @name, self.name
    puts "Meow, I am #{@name}"
  end
end

# animals, pets, vertabrates <= you need to find the right word
# Pets <== pets
