# specifically Pet things
# should only have code that is meant to be shared
class Pet
  attr_reader :name # defensive programming - limit access
  attr_accessor :mood

  def initialize(name)
    puts "really interesting...?"
    binding.pry
    @name = name
    @mood = "nervous"

    if self.class == Pet
      @@all << self
    end
  end

  def be_nervous(whatever)
    puts "I am #{@mood}, #{whatever}"
  end

  def be_scared
  
  end

  # def omg
  #   "up here"
  # end
end
